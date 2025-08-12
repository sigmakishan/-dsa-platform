import React, { useState } from 'react';

const dsaData = {
  "Arrays": {
    "Easy": [
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
      "Find the maximum element in an array.",
      "Calculate the sum of all elements in an array.",
      "Remove duplicates from a sorted array in-place."
    ],
    "Medium": [
      "Find the 'k-th' largest element in an unsorted array.",
      "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum.",
      "Rotate an array of n elements to the right by k steps.",
      "Product of Array Except Self: Given an array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]."
    ],
    "Hard": [
      "Given two sorted arrays, find the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).",
      "Trapping Rain Water: Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
      "Find the first missing positive integer in an unsorted integer array.",
      "Largest Rectangle in Histogram: Find the area of the largest rectangle in the histogram."
    ]
  },
  "Strings": {
    "Easy": [
      "Implement a function to reverse a string.",
      "Check if a string is a palindrome (reads the same forwards and backwards).",
      "Find the first non-repeating character in a string."
    ],
    "Medium": [
      "Given a string, find the length of the longest substring without repeating characters.",
      "Implement atoi which converts a string to an integer.",
      "Group anagrams together from a list of strings."
    ],
    "Hard": [
      "Given a string and a dictionary of words, find if the string can be segmented into a space-separated sequence of one or more dictionary words.",
      "Implement regular expression matching with support for '.' and '*'.",
      "Find the minimum window in a string which will contain all the characters in another string."
    ]
  },
  "Linked Lists": {
    "Easy": [
        "Reverse a singly linked list.",
        "Merge two sorted linked lists and return it as a new sorted list.",
        "Delete a node in a Linked List (except the tail) given only access to that node."
    ],
    "Medium": [
        "Detect a cycle in a linked list.",
        "Find the intersection point of two linked lists.",
        "Sort a linked list in O(n log n) time using constant space complexity."
    ],
    "Hard": [
        "Reverse a linked list in k-groups.",
        "Copy a linked list with a random pointer.",
        "Merge k sorted linked lists and return it as one sorted list."
    ]
  }
};

function DsaGeneratorPage() {
  const [topic, setTopic] = useState('Arrays');
  const [difficulty, setDifficulty] = useState('Easy');
  const [question, setQuestion] = useState('Your generated question will appear here...');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQuestion = () => {
    setIsLoading(true);
    setTimeout(() => {
      const questionsList = dsaData[topic][difficulty];
      const randomIndex = Math.floor(Math.random() * questionsList.length);
      const randomQuestion = questionsList[randomIndex];
      setQuestion(randomQuestion);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans pt-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 m-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">DSA Question Generator</h1>
          <p className="text-gray-500 mt-2">Select a topic and difficulty to get a practice problem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <select
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              {Object.keys(dsaData).map(topicName => (
                <option key={topicName} value={topicName}>{topicName}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="md:self-end">
            <button
              onClick={handleGenerateQuestion}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[200px] flex items-center justify-center">
          <p className="text-gray-600 text-center text-lg">{question}</p>
        </div>
      </div>
    </div>
  );
}

export default DsaGeneratorPage;