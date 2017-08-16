import React,{ Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import Article from './Article'
import axios from 'axios'


class ArticleList extends Component {
  state = {
    tab:'all',
    currentp:1,
    loading:false
  }
  constructor(props){
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
  }  
  componentDidMount(){ 
    this.setState({tab:this.props.id},()=> {
      this.doAjax()
    });
    

  }
  scrollHandler(e){
    if(this.state.loading){
      return;
    }
    let totalHeight = e.target.scrollTop+e.target.offsetHeight;
    let ulHeight = this.refs['article_ul'].offsetHeight;
    if(totalHeight+60 > ulHeight){
      this.setState({currentp:this.state.currentp+1,loading:true},()=>{
        this.doAjax(true);
      })
      
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.id!==this.state.tab){
      this.setState({tab:nextProps.id},()=>{
        this.doAjax();
      });
      
    } 
  }
  doAjax(append=false){
      this.props.actions.setNodeLoading(true);
      let params ={};
      params.tab=this.state.tab;
      params.page=this.state.currentp;
      params.limit=10;
      params.mdrender=false;

    axios.get('https://cnodejs.org/api/v1/topics',{
      params:params
      }).then(body => {
        if(!append){
          this.props.actions.setArticleList(body.data.data);
        }else{
          this.props.actions.updateArticleList(body.data.data);
          this.setState({loading:false});
        }

        this.props.actions.setNodeLoading(false);
    });
  }
  render(){
    let articles = this.props.list.map((item) => (
      <Article {...item} key={item.id} />
    ));
    
    return (
      <div className="article-list" onScroll ={this.scrollHandler}>
        <ul ref="article_ul">
          {articles}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => ({
  list:state.article,
  id:ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);