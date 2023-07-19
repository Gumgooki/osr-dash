import React from 'react'

export default function Header(){
    return (
        <div class="flex flex-row">
            <div>
                <h2>OSR Dashboard</h2>
            </div>
            <div>
                <ul class="flex flex-row space-x-6">
                    <li>Home</li>
                    <li>FLume</li>
                    <li>Campaigns</li>
                    <li>Generators</li>
                </ul>
            </div>
        </div>
    )
}