import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import CardRenderer from '../jobs/CardRenderer';
import LoadButton from '../components/LoadButton';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import * as pageTitles from '../resources/pageTitles';
import * as actionCreators from "../store/actionCreators";
import ErrorBox from "../components/ErrorBox";

class Profilespage extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfCards: 3
        };
    }

    componentDidMount = () =>{
        // check if data already fetched, if true, don't fetch again
        // call the function the fetches then stores the data here from action creators
        if(this.props.data.length < 1){
            this.props.onLoad();
        }
    };

    loadMore = () =>{
        if(this.state.numberOfCards <= (this.props.data).length){
            this.setState({numberOfCards: this.state.numberOfCards + 6});
        }
    };

    renderContent = () =>{
        let contentToRender = null;
        if(this.props.searching && this.props.data.length <= 0){
            contentToRender =(<ErrorBox>
                No results found! <i className="far fa-frown"/> <br/>
                Please make sure you typed correct term and selected correct search settings
            </ErrorBox>);
        }
        else if(this.props.loading){
            contentToRender = <Loading />
        }
        else if(this.props.data.length <= 0){
            contentToRender = <ErrorBox> No profiles to load! <i className="far fa-frown"/> </ErrorBox>
        }
        else{
            contentToRender = <CardRenderer number={this.state.numberOfCards} data={this.props.data}/>;
            if(this.state.numberOfCards > (this.props.data).length && !this.props.loading && !this.props.searching){
                contentToRender = (<div>
                    <CardRenderer number={this.state.numberOfCards} data={this.props.data}/>
                    <ErrorBox> No more profiles to load! <i className="far fa-frown"/> </ErrorBox>
                </div>)
            }
        }
        return contentToRender;
    };

    renderLoadButton = () =>{
        if(this.state.numberOfCards <= (this.props.data).length){
            return (<LoadButton clickHandler={this.loadMore}>Load More</LoadButton>);
        }
    };

    render(){
        document.title = pageTitles.PROFILES;

        return (
            <div>
                <SearchForm />
                <section>
                    
                    <SectionTitle> All Product Profiles </SectionTitle>
                    { this.renderContent() }
                    { this.renderLoadButton() }

                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoad: () => dispatch(actionCreators.fetchData())
    };
};

const mapStateToProps = state =>{
    return {
        data : state.data,
        searching: state.searching,
        loading: state.loading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profilespage);