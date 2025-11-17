/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
 //write your code here
    static allTasks = []
    #completed = false;
    #minutesSpent = 0;

    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        
        Task.allTasks.push(this);
    }
    get completedStatus() {
        return this.#completed;
    }

    get timeSpent() {
        return this.#minutesSpent;
    }
    workOn(minutes) {
        this.#minutesSpent += minutes;
        console.log(`Worked on ${this.title} for ${minutes} minutes. Total time: ${this.#minutesSpent} minutes`)
    }

    complete() {
        this.#completed = true;
        console.log(`${this.title} has been completed!`)
    }

    isComplete() {
        return this.#completed;
    }

    static getTotalTasks() {
        return Task.allTasks.length;
    }

    static findByTitle(title) {
       return  Task.allTasks[Task.allTasks.findIndex((task) => task.title == title)];
    }
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
