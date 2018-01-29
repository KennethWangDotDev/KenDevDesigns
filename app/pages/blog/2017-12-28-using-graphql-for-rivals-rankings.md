---
title: Using GraphQL For Rivals Rankings
layout: blog-post
root: blog
nav-blog: true
date: 2017-12-28
collection:
  - blog
  - webdev

thumbnail: blog/using-graphql-for-rivals-rankings/thumbnail.png

description: "Prior to working on the project, I heard many good things about GraphQL and decided to give it a try. As expected, GraphQL was incredibly easy to use with great results."
---

I recently was contracted to develop [Rivals Rankings](http://localhost:3000/portfolio/rivals-of-aether/) --- a power rankings service for the online competitive game [Rivals of Aether](http://www.rivalsofaether.com/). Rivals Rankings works by fetching tournament data from [smash.gg](https://smash.gg/) (tournament hosting service) and running match results through [TrueSkill](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/). Prior to working on the project, I heard many good things about GraphQL and decided to give it a try. As expected, GraphQL was incredibly easy to use and yielded great results. If you haven’t already heard about GraphQL yet, you will most likely hear about it very soon. GraphQL has been trending, and is expected to get even more popular in 2018.


### Why GraphQL

Firstly, what exactly is GraphQL? In the words of its creator:

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

GraphQL's main selling point is that it provides a **single endpoint** and retrieves **only the data you ask for**. These two features might sound trivial, but they are actually extremely useful. To fully understand the power of GraphQL, it is first important to realize what problems that it aims to solve. Consider a blog post with 50 comments. Ideally, how many requests should fetching the post from an API take:

* 11 requests (1 for the post and 1 for each comment)
* 2 requests (1 for the post and 1 for all comments)
* 1 request (1 payload encapsulating these 11 resources)

Ideally in terms of server load, 1 request is best. It is most likely that the initialization of the HTTP request is the most expensive part of the retrieval, so splitting these requests apart would make each individual request smaller but would increase the total amount of time it takes to render our page.

As the product grows, maybe the client would ask you to create a mobile version of the site, where only 5 comments are displayed, and that author metadata is omitted from the main post. Now our previous request is going to contain extra unused data. In this simple example, it may be permissible to simply ignore the extra data. But as the data graph grows even further, more complexity will be introduced and there may come a time where the relevant data isn't even in the majority content of the payload.

This is where GraphQL comes in. GraphQL has a single endpoint so there is only a single request. You then query the endpoint --- asking for exactly the data you need --- and GraphQL spits back the resulting data to you.

### Easiest Queries Ever

Querying data is easier than ever using GraphQL. In Rivals Rankings, I'm using the React + GraphQL + [Apollo](https://www.apollographql.com/) stack. Here is how I can easily get a player's basic information, all the sets he has played, and each individual match of each set.

```javascript
const matchInfoQuery = gql`
	query Player($id: ID!) {
	    Player(id: $id) {
	        id
	        name
	        ratings
	        sets {
	            id
	            date
	            winnerScore
	            loserScore
	            loser {
	                id
	                name
	            }
	            winner {
	                id
	                name
	            }
	            matches {
	                winner {
	                    id
	                    name
	                }
	                loser {
	                    id
	                    name
	                }
	                gameNumber
	            }
	        }
	    }
	}
`;
```
The GraphQL query integrates seamlessly into JavaScript code, as I can just wrap the query in the `gql` template literal and Apollo takes care of everything else. As an added convenience, the returned JavaScript object perfectly mimics the shape of the query too, so I know exactly how to access each returned data.

However, if I were to try to query the same information using a normalized REST API, the resulting code would look *much messier*. The below example uses the [got](https://www.npmjs.com/package/got) package for fetching.

```javascript
async function getPlayerMatchInfo() {
    // Get player basic info
    const playerInfo = (await got(`${apiEndpoint}/player/?id=${player.id}`, {
        json: true
    })).body;
    playerInfo.setsExpanded = [];

    // Expand sets
    for (set of player.sets) {
        const setInfo = (await got(`${apiEndpoint}/set/?id=${set.id}`, {
            json: true
        })).body;

        // Get data for winner and loser from Id
        setInfo.winnerExpanded = (await got(
            `${apiEndpoint}/player/?id=${set.winnerId}`,
            { json: true }
        )).body;
        setInfo.loserExpanded = (await got(
            `${apiEndpoint}/player/?id=${set.loserId}`,
            { json: true }
        )).body;

        // Expand matches
        set.matchesExpanded = [];
        for (match of set.matches) {
            const matchInfo = (await got(
                `${apiEndpoint}/match/?id=${match.id}`,
                { json: true }
            )).body;

            // Get data for winner and loser from Id
            match.winnerExpanded = (await got(
                `${apiEndpoint}/player/?id=${match.winnerId}`,
                { json: true }
            )).body;
            match.loserExpanded = (await got(
                `${apiEndpoint}/player/?id=${match.loserId}`,
                { json: true }
            )).body;

            // Store match expanded information into the set
            set.matchesExpanded.push(match);
        }

        // Store set expanded information
        playerInfo.setsExpanded.push(set);
    }
    return playerInfo;
}
```

Not only is the code hard to read (even when using the simple got package along with ES6 async/await keywords), but we are sending one request per set and match. This is extremely inefficient. The most common approach to remedy this is to add a new API endpoint that gives you all the set and match information upon a single request. However, this goes full circle and runs into the problem of inflexibility described above. The GraphQL approach is much cleaner, easier to read, more efficient, and can be easily modified to account for changes.


### Conclusion

Using GraphQL for Rivals Rankings has been an extremely positive experience for me. Similar to the example above, there are many complicated queries that are made trivial with GraphQL. GraphQL is still relatively new, but it has a very active community behind it who are constantly creating new tools to support it. GraphQL may just be the future of querying APIs.