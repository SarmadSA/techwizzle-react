import React, {Component} from 'react';
import SectionTitle from '../components/SectionTitle';
import SearchForm from '../components/SearchForm';
import CardRenderer from '../jobs/CardRenderer';
import LoadButton from '../components/LoadButton';
import { connect } from 'react-redux';

class Profilespage extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfCards: 3
        };
        this.loadMore = this.loadMore.bind(this);
        this.renderLoadButton = this.renderLoadButton.bind(this);
    }
    
    loadMore(){
        if(this.state.numberOfCards <= (this.props.data).length){
            this.setState({numberOfCards: this.state.numberOfCards + 6});
        }
    }

    renderLoadButton(){
        if(this.state.numberOfCards <= (this.props.data).length){
            return (<LoadButton clickHandler={this.loadMore}>Load More</LoadButton>);
        }
    }

    render(){
        document.title = "TechWizzle | Profiles";
        return (
            <div>
                <SearchForm />
                <section>
                    
                    <SectionTitle> All Product Profiles </SectionTitle>
                    <CardRenderer number={this.state.numberOfCards} data={this.props.data}/>
                    {this.renderLoadButton()}

                </section>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data : state.data
    };
};

export default connect(mapStateToProps)(Profilespage);