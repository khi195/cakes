import React, {Component} from 'react';

class Cakeform extends Component {
    render(){
        console.log('hello')
        return(
            <form onSubmit={this.props.onSubmit}>
            <label>
              cake Name:
              <input type="text" name="name" />
            </label>
            <label>
              comment:
              <input type="text" name="comment" />
            </label>
            <label>
              factor:
              <input type="text" name="factor" />
            </label>
              <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default Cakeform;