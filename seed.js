// seed.js
"use strict";

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose = require("mongoose"),
    Subscriber = require("./models/Subscriber");

// 데이터베이스 연결 설정
mongoose.connect(
    "mongodb+srv://kkcc56789012:rlaalstn_0907@ut-node.of0ys2u.mongodb.net/?retryWrites=true&w=majority&appName=UT-Node"
);
mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "박은지",
    email: "babo@b.com",
    newsletter: "true",
  },
  {
    name: "김현성",
    email: "kimura@b.com",
    newsletter: "false",
  },
  {
    name: "곽계영",
    email: "daebawi@b.com",
    newsletter: "true",
  },
  {
    name: "김민수",
    email: "daebuking@b.com",
    newsletter: "false",
  },
  {
    name: "유우선",
    email: "milk@b.com",
    newsletter: "true",
  },
];
/*
// 기존 데이터 제거
Subscriber
    .deleteMany({})
    .exec()
    .then(result => {
        console.log(`Deleted ${result.deletedCount} records.`);
    })
    .catch(error =>{
        console.log(`Error: ${error.message}`);
    });
*/
var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s => {
    commands.push(
        Subscriber
        .create({
            name: s.name,
            email: s.email,
            newsletter: s.newsletter
        })
        .then(s => {
            console.log(`Created: ${s.name}`);
        })  
    );
})

// 프라미스 생성 후 로깅 작업
Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r, null, 2));
        mongoose.connection.close(); //오류 발생 가능
    })
    .catch(error => {
        console.log(e);
    });
