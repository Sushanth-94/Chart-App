import React from 'react';

const Tabs = () => {
    return(
      <div className ="container">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
        </li>
      </ul>
      
    
      <div class="tab-content">
        <div class="tab-pane active" id="home" role="tabpanel">pane 1</div>
        <div class="tab-pane" id="profile" role="tabpanel">pane 2</div>
        <div class="tab-pane" id="messages" role="tabpanel">pane 3</div>
        <div class="tab-pane" id="settings" role="tabpanel">pane 4</div>
      </div>
    </div>
    );
}

export default Tabs;