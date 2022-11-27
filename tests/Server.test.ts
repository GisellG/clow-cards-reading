import app from "../src/models/Server";
import request from "supertest";
import mongoose from 'mongoose';
require('dotenv').config();

describe("Clow Cards fortune reading method", () => {

    beforeAll(async () => {
        const dbKey = process.env.MONGODB_CNN as string;
        await mongoose.connect(dbKey);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe("GET /api/clow-cards/", () => {
        let response: any;

        beforeEach(async () => {
            response = await request(app).get('/api/clow-cards/').send();
        });

        it('route works', async () => {
            expect(response.status).toBe(200);
        });
    });

    describe("GET /api/user/", () => {
        let response: any;

        beforeEach(async () => {
            response = await request(app).post('/api/user/').send({
                "firstName": "Maximiliano",
                "lastName": "Quesito",
                "email": "maximiliano.con.quesito@testmail.me",
                "password": "max123",
                "googleConnected": false
            });
        });

        it('route works', async () => {
            expect(response.status).toBe(200);
        });
    });
});