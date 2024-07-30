import { roles } from "./rolebase";
import { users } from "./userbase";
import { writeFile } from 'fs';

interface AdminRequest {
    user: string;
}

const queue: AdminRequest[] = [];

export class AdminRequestsQueue {
    

    enqueue(request: AdminRequest): void {
        queue.push(request);
        // const filePath = '/c:/Users/yogeshe/Desktop/Assignments/Angular/RBA/rba/src/app/database/adminrequests.json';
        // const data = JSON.stringify(queue);
        // writeFile(filePath, data, (err) => {
        //     if (err) {
        //         console.error(err);
        //     }
        // });
    }

    approveByUser(user: string): void {
        console.log(user);
        const userToUpdate = Object.values(users).find((u:any) => u.name === user);
        if (userToUpdate) {
            userToUpdate.role = 'admin';
        }
    }

    dequeueByUser(user: string): void {
        const index = queue.findIndex(request => request.user === user);
        if (index !== -1) {
            queue.splice(index, 1)[0];
        }
    }

    isEmpty(): boolean {
        return queue.length === 0;
    }

    view(): AdminRequest[] {
        return queue;
    }

    size(): number {
        return queue.length;
    }
}