import React, {Component} from "react";
import ReactDom from 'react-dom';
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
import {Link, Typography} from "@material-ui/core";
import '../details/Details.css';
import Home from "../home/home";
import YouTube from "react-youtube";
import GridList from "@material-ui/core/GridList";
import {withStyles} from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    gridListArtist: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    }
})

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                    id: 1,
                    stateId: "star1",
                    color: "black"
                },
                {
                    id: 2,
                    stateId: "star2",
                    color: "black"
                },
                {
                    id: 3,
                    stateId: "star3",
                    color: "black"
                },
                {
                    id: 4,
                    stateId: "star4",
                    color: "black"
                },
                {
                    id: 5,
                    stateId: "star5",
                    color: "black"
                }
            ]
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId;
        })[0];

        this.setState({
            currentState
        });
        console.log(this.state);
    }

    backtoHomeHandler = () => {
        ReactDom.render(<Home/>, document.getElementById('root'));
    }

    startClickHandler = (id) =>{
        let starIconList = [];
        for(let star of this.state.starIcons){
            let starNode = star;
            if(star.id <= id){
                starNode.color="yellow";
            }else{
                starNode.color = "black";
            }
            starIconList.push(starNode);
        }
        this.setState({
            starIcons: starIconList
        })
    }

    render() {
        let movie = this.state.movie;
        const {classes} = this.props;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className={"details"}>
                <Header/>
                <div className={"back"}>
                    <Typography onClick={this.backtoHomeHandler}>
                        &#60;Back to Home
                    </Typography>

                </div>
                <div className={"flex-containerDetails"}>
                    <div className={"leftDetails"}>
                        <img src={movie.poster_url} alt={movie.title}/>
                    </div>
                    <div className={"middleDetails"}>
                        <div>
                            <Typography variant={"headline"} component={"h2"}>
                                {movie.title}
                            </Typography>
                        </div>
                        <br/><br/>

                        <div>
                            <Typography>
                               <span className={"bold"}>
                                   Genre:
                               </span>
                                {movie.genres.join(',')}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                  <span className={"bold"}>
                                   Duration:
                               </span>
                                {movie.duration}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                  <span className={"bold"}>
                                   Release Date:
                               </span>
                                {" " + new Date(movie.release_date).toDateString()}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                  <span className={"bold"}>
                                   Rating:
                               </span>
                                {movie.critics_rating}
                            </Typography>
                        </div>
                        <br/><br/>

                        <div>
                            <Typography>
                                  <span className={"bold"}>
                                   Plot:
                               </span>
                                <span>
                                    <Link href={movie.wiki_url}>
                                       ( Wiki Link )
                                    </Link>
                                </span>
                                {" " + movie.storyline}
                            </Typography>
                        </div>
                        <div className={"trailerContainer"}>
                            <Typography>
                                <span className={"bold"}> Trailer:</span>
                                <YouTube
                                    videoId={movie.trailer_url.split("?v=")[1]}>
                                    opts={opts}
                                    onReady={this._onReady}
                                </YouTube>
                            </Typography>
                        </div>
                    </div>
                    <div className={"rightDetails"}>
                        <Typography>
                            <span className={"bold"}> Rate this movie:</span>
                        </Typography>
                        {
                            this.state.starIcons.map(star =>(
                                <StarBorderIcon className={star.color} key={"star" + star.id}
                                onClick={()=> this.startClickHandler(star.id)}>
                                </StarBorderIcon>
                            ))
                        }

                        <div className={"bold marginBottom16 marginTop16"}>
                            <Typography>
                                <span className={"bold"}>
                                    Artists:
                                </span>
                            </Typography>
                        </div>
                        <GridList cols={2} cellHeight={160} className={classes.gridListArtist}>
                            {movie.artists.map(art => (
                                <GridListTile key={art.id}>
                                        <Link href={art.wiki_url}>
                                        <img src={art.profile_url} alt={art.first_name + " " + art.last_name} className={"artist-poster"}/>
                                        <GridListTileBar title={art.first_name + " " + art.last_name}>
                                        </GridListTileBar>
                                        </Link>
                                </GridListTile>
                            ))}

                        </GridList>
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Details);