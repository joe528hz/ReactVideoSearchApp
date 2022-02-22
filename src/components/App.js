import React from "react";
import youtube from '../api/youtube';
import SearchBar from './Searchbar';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";
import Spinner from './Spinner'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('RectJs')
    }

    onTermSubmit = async (term) => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        // console.log('From the App!', video)
        this.setState({ selectedVideo: video })
    }

    rendererContent() {
        if (!this.state.selectedVideo) {
            return <Spinner />
        } else {
            return (
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ui container">
                {this.rendererContent()}
            </div>
        )
    }
}

export default App;