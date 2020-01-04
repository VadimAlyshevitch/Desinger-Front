import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu';
import AllFeed from './components/AllFeed';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          src: 'https://i.pinimg.com/originals/cb/44/86/cb4486c39614fe7a3d2c87f25920202b.jpg',
          userId: 1,
        },
        {
          src: 'https://images.wallpaperscraft.ru/image/kub_figura_temnyj_142157_225x300.jpg',
          userId: 2,
        }
      ],
      users: [
        {
          id: 1,
          nickname: 'Пользователь 2',
          avatar: 'https://images.wallpaperscraft.ru/image/para_zvezdnoe_nebo_art_123338_225x300.jpg',
        },
        {
          id: 2,
          nickname: 'Пользователь 1',
          avatar: 'https://cs10.pikabu.ru/post_img/big/2019/02/17/8/1550407011156734599.png',
        }
      ]
    }
  }
  render() {
    return(
      <>
        <TopMenu />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {
                this.state.posts.map((post) => {
                  let user = this.state.users.find(user => user.id === post.userId)
                  if (!user) {
                    user = {
                      nickname: 'Неизвестный пользователь',
                    }
                  }
                  return <div className="post">
                      <div>
                        <img className="user-avatar" src={user.avatar} />
                        <p>{ user.nickname }</p>
                      </div>
                      <img className="post-img" src={post.src} />
                  </div>
                })
              }
            </div>
            <div className="col-md-3">
              {
                this.state.users.map(user => {
                  return (
                    <div className="user-item">
                      <img className="user-avatar" src={user.avatar} />
                      <p>{ user.nickname }</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
