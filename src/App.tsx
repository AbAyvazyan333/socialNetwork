import React from 'react';

import logo from "./images/logo.png"
import homeIcon from './images/home.png'
import searchIcon from './images/search.png'
import messageIcon from './images/messenger.png'
import heartIcon from './images/heart.png'
import createIcon from './images/create.png'
import userIcon from './images/user.png'
import menuIcon from './images/menu.png'


import instaIcon from './images/instagram.png'//min-bar


import './App.css';

function App() {
  return (

      // <> 1 ----------------------------------------------------Left part for categories-------------------------------------------------------------
      //--------------------------------------------------------------Large size----------------------------------------------------------------
      //       <div className={'app_bar'}>
      //           <div className={'logo-part'}>
      //               <img src={logo} alt=""/>
      //           </div>
      //
      //           <div className={'category-part'}>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={homeIcon} className={'category-image'} alt=""/></div>
      //                   <div>Home</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={searchIcon} className={'category-image'} alt=""/></div>
      //                   <div>Search</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={exploreIcon} className={'category-image'} alt=""/></div>
      //                   <div>Explore</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={messageIcon} className={'category-image'} alt=""/></div>
      //                   <div>Messages</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={heartIcon} className={'category-image'} alt=""/></div>
      //                   <div>Notifications</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={createIcon} className={'category-image'} alt=""/></div>
      //                   <div>Create</div>
      //               </div>
      //
      //               <div className={'single-category'}>
      //                   <div className={'category-icon'}><img src={userIcon} className={'category-image'} alt=""/></div>
      //                   <div>Profile</div>
      //               </div>
      //           </div>
      //
      //           <div className={'single-category'}>
      //               <div className={'category-icon'}><img src={menuIcon} className={'category-image'} alt=""/></div>
      //               <div>More</div>
      //           </div>
      //       </div>
      //1 </>


      <>
           <div className={'min-bar'}>
                    <div className={'min-logo-part'}>
                        <img src={instaIcon} alt="Logo"/>
                    </div>

               <div className={'min-category-part'}>
                    <div className={'min-single-category'}>
                        <img src={homeIcon} className={'min-icon'} alt="Home"/>
                    </div>
                   <div className={'min-single-category'}>
                        <img src={searchIcon} className={'min-icon'} alt="Search"/>
                    </div>
                   <div className={'min-single-category'}>
                        <img src={messageIcon} className={'min-icon'} alt="Messages"/>
                    </div>
                   <div className={'min-single-category'}>
                        <img src={heartIcon} className={'min-icon'} alt="Notifications"/>
                    </div>
                   <div className={'min-single-category'}>
                        <img src={createIcon} className={'min-icon'} alt="Create"/>
                    </div>
                   <div className={'min-single-category'}>
                        <img src={userIcon} className={'min-icon'} alt="User"/>
                    </div>

               </div>

               <div className={'min-menu-part'}>
                   <div className={'min-single-category'}>
                       <img src={menuIcon} className={'min-icon'} alt="Menu"/>
                   </div>
               </div>
            </div>

          {/*notification part-----------------------------------------------------------------------------------------*/}

          {/*<div className={'notification-part'}>*/}
          {/*      <div className={'notification-section'}>*/}
          {/*          Notifications*/}
          {/*      </div>*/}
          {/*    <div className={'section-of-notifications'}>*/}
          {/*      <div className={'single-notification'}>*/}
          {/*          <img src={userIcon} alt="User"/>*/}
          {/*          <span style={{fontWeight:'bold'}}>UserName</span>*/}
          {/*          <span>started following you</span>*/}
          {/*          <button className={'notify-button-following'}>Following</button>*/}
          {/*      </div>*/}
          {/*        <div className={'single-notification'}>*/}
          {/*            <img src={userIcon} alt="User"/>*/}
          {/*            <span style={{fontWeight:'bold'}}>UserName</span>*/}
          {/*            <span>started following you</span>*/}
          {/*            <button className={'notify-button-following'}>Following</button>*/}
          {/*        </div>*/}
          {/*        <div className={'single-notification'}>*/}
          {/*            <img src={userIcon} alt="User"/>*/}
          {/*            <span style={{fontWeight:'bold'}}>UserName</span>*/}
          {/*            <span>liked your post</span>*/}
          {/*            <button className={'notify-button-toFollow'}>Follow</button>*/}

          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}

          {/*----------------------------------------------------------------------------------------------------*/}



          <div className={'search-part'}>
              <div className={'search-upper-part'}>
                <div className={'search-section'}>Search</div>
                <div className={'search-input-part'}>
                    <input type="text" placeholder={'Search'}/>
                </div>
              </div>

              <div className={'search-main-part'}>
                    <div className={'search-instruction-part'}>
                        <span style={{fontSize:'14px'}}>Recent</span>
                        <span className={'clear-searches-button'}>Clear all</span>
                    </div>

                    <div className={'search-singleUser-part'}>
                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>

                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>

                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>
                    </div>


              </div>
          </div>
      </>
  );
}

export default App;
