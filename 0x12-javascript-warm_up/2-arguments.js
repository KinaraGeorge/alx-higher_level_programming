#!/usr/bin/node
// scripts prints using arguments
const argLength = process.argv.length;

if (argLength < 3) {
  console.log('No argument');
} else if (argLength === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
