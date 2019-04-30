import React, {Component} from 'react';
import GitUserForm from './Component/GitUserForm.js';
import './GitUserForm.css'
import People from './img/people.svg';
import Email from './img/email.svg';
import Link from './img/link.svg';
import Map from './img/map.svg';
import axios from 'axios'

class App extends Component{
  state = {
    bio: null,
    name: null,
    login: null,
    email: null,
    avatar: null,
    userUrl: null,
    company: null,
    blogUrl: null,
    location: null,
    userCreate: null,
    userUpdated: null,
    publicRepos: null,
    publicGists: null,
    followersUrl: null,
    subscriptionsUrl: null,
    organizationsUrl: null
  };

  getUser = (event) =>{
    event.preventDefault();
    const gitUser = event.target.elements.username.value;
    // const gitUser = "MAXON-BY";
    event.target.elements.username.value = '';

    console.log(gitUser);
    axios.get(`https://api.github.com/users/${gitUser}`)
        .then((res) =>{
          console.log(res);

          const bio              = res.data.bio;
          const name             = res.data.name;
          const login            = res.data.login;
          const email            = res.data.email;
          const avatar           = res.data.avatar_url;
          const userUrl          = res.data.html_url;
          const company          = res.data.company;
          const blogUrl          = res.data.blog;
          const location         = res.data.location;
          const userCreate       = res.data.created_at;
          const userUpdate       = res.data.updated_at;
          const publicRepos      = res.data.public_repos;
          const publicGists      = res.data.public_gists;
          const followersUrl     = res.data.followers;
          const subscriptionsUrl = res.data.subscriptions_url;
          const organizationsUrl = res.data.organizations_url;

          this.setState({bio});
          this.setState({name});
          this.setState({login});
          this.setState({email});
          this.setState({avatar});
          this.setState({userUrl});
          this.setState({company});
          this.setState({blogUrl});
          this.setState({location});
          this.setState({userCreate});
          this.setState({userUpdate});
          this.setState({publicRepos});
          this.setState({publicGists});
          this.setState({followersUrl});
          this.setState({subscriptionsUrl});
          this.setState({organizationsUrl});


        })
  };

  render(){
    return(
        <div className="App-header gitSection bg-git">
          <div className="gitWrap">
            <div className="gitForm">
              <GitUserForm getUser={this.getUser}/>
            </div>
            <div className="gitInfo">
              <div className="gitInfo-left">
                <div className="userAvatar">
                  <img src={this.state.avatar} alt={this.state.name} />
                </div>
                <div className="mainInfo">
                  <span className="userName">{this.state.name}</span>
                  <span className="userLogin">{this.state.login}</span>
                </div>
                <div className="dopInfo">
                  <p>{this.state.bio}</p>
                </div>
                <ul className="vcard-details">
                  <li className="vcard-detail detail">
                    <div className="svgInfo">
                      <img src={People} alt="#" />
                    </div>
                    <span className="p-org"><div>{this.state.company}</div></span>
                  </li>
                  <li className="vcard-detail">
                    <div className="svgInfo">
                      <img src={Map} alt="#" />
                    </div>
                    <span className="p-label">{this.state.location}</span>
                  </li>
                  <li className="vcard-detail">
                    <div className="svgInfo">
                      <img src={Email} alt="#" />
                    </div>
                    <a className="u-email" href={"mailto:" + this.state.email}>{this.state.email}</a>
                  </li>
                  <li className="vcard-detail">
                    <div className="svgInfo">
                      <img src={Link} alt="#" />
                    </div>
                    <a className="u-url" target="_blank" rel="noopener noreferrer" href={this.state.blogUrl}>{this.state.blogUrl}</a>
                  </li>
                </ul>
              </div>
              <div className="gitInfo-right">
                <h3>Public profile</h3>

                <div className="gitInfo-profile">
                  <div className="infoGroup">
                    <p className="infoAbout">Link Git</p>
                    <div className="infoOut">
                      <p><a href={this.state.userUrl} target="_blank" rel="noopener noreferrer">{this.state.userUrl}</a></p>
                    </div>
                  </div>

                  <div className="infoGroup">
                    <p className="infoAbout">Followers</p>
                    <div className="infoOut">
                      <p>{this.state.followersUrl}</p>
                    </div>
                  </div>

                  <div className="infoGroup">
                    <p className="infoAbout">Public repositories</p>
                    <div className="infoOut">
                      <p>{this.state.publicRepos}</p>
                    </div>
                  </div>

                  <div className="infoGroup">
                    <p className="infoAbout">Public gists</p>
                    <div className="infoOut">
                      <p>{this.state.publicGists}</p>
                    </div>
                  </div>

                  <div className="infoGroup">
                    <p className="infoAbout">Create profile:</p>
                    <div className="infoOut">
                      <p>{this.state.userCreate}</p>
                    </div>
                  </div>

                  <div className="infoGroup">
                    <p className="infoAbout">Last update profile:</p>
                    <div className="infoOut">
                      <p>{this.state.userUpdate}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App