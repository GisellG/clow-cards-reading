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

        it('route wors', async () => {
            expect(response.status).toBe(200);
        });
    })
});