import fs from 'fs';
import csv from 'csv-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import connectDB from '../config/db.js';

dotenv.config();
await connectDB();

const results = [];
fs.createReadStream('./data/jeans_products.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async() => {
        try {
            await Product.deleteMany(); // clear existing data
            await Product.insertMany(results);
            console.log('✅ Products imported successfully!');
            mongoose.connection.close();
        } catch (err) {
            console.error('❌ Error importing data:', err);
            mongoose.connection.close();
        }
    });