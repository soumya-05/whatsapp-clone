import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar,IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="data:image/jpeg;base64,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"/>
                <div className="sidebar__headerRight">
                  <IconButton>
                    <DonutLargeIcon />
                  </IconButton>
                  <IconButton>
                    <ChatIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                  
                </div>
            </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or Start new chat" type="text"/>
            </div>
        </div>

       <div className="sidebar__chats">
           <SidebarChat />
           <SidebarChat />
           <SidebarChat />
       </div>
        </div>
    )
}

export default Sidebar
