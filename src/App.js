import React from 'react'
import ProfileCard from './components/ProfileCard'

class App extends Component {
  constructor(){
  Supper();

  this.handleClick = this.handleClick.bind(this)
  this.state = {
    writers: {
      loading: false,
      list:{}
    }
  }
  this.handleclick(){
    this.setState({
      writers: {
        loading: true
      }
    })
    setTimeout(async () => {
      let resp = await ("/writers.json");
      let result =await resp.json()
    })
    this.setState({
      writers: {
        loading: true,
      }
    })
    } 
      
    }
  render() {
    const {
      writers: { loading, list }
    } = this.state;
  }
if (loading) {
  return (
    <div>
      <h1>writers profile</h1>
      <div className='container'>
        <div className='card action'>
          <p className='infotext'>loading...</p>

        </div>

      </div>
    </div>
  )
}
}

export default App
