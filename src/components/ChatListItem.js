import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Rafael Batista</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chaListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam corporis delectus dolores eligendi error esse facilis itaque maiores minus molestias praesentium quis ratione recusandae, vero voluptate voluptatem voluptatibus voluptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}