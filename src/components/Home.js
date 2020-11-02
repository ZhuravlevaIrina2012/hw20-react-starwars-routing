import React, {Component} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {friends} from "../utils/Constants";
import ErrorPage from "./ErrorPage";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const key = this.props.match.params.hero||'luke';
        if (friends.includes(key)) {
            this.setState({hero: key});
            this.props.changeHero(key);
        }
    }

    render() {
        if (this.state.hero) {
            return (
                <main className="clearfix">
                    <Hero hero={this.state.hero}/>
                    <DreamTeam hero={this.state.hero}/>
                    <FarGalaxy/>
                </main>
            );
        } else {
            return <ErrorPage/>;
        }
    }
}

export default Home;