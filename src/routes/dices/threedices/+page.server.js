/** @type {import('./$types').Actions} */

import {db} from "$lib/database.ts";

export const actions = {
    submitScore: async ({request}) => {
        const data = await request.formData();
        const username = data.get('username');
        const userScore = data.get('score');
        const gameTypeID = 1;

        // Check if user exist

        // If not, make new user and add score to the database

        // Otherwise, add new score to the database

        async function createUser(username) {
            await db.users.create({
                data: {
                    username: username
                }
            });

        }

        async function addScore(username, score) {
            await db.highscores.create({
                data: {
                    user: username,
                    gametype: 1

                }
            })
        }

    }
};