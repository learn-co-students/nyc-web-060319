import React from 'react'

class Form extends React.Component{
    
    state = {
        name: "",
        "famous-for": "",
        happyImg: "",
        sadImg: ""
    }

    changeHandler = (event)=>{
        // console.log("in change handler", event.target.value)
        let inputName = event.target.name
        console.log("inputName", inputName)
        this.setState(
            {[inputName]: event.target.value}
            )
    }
    
    render(){
        return (
            <div>
                <form onSubmit={(event) => this.props.submitHandler(event, this.state )}>


                    <input type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.changeHandler}/>


                    <input type="text" name="famous-for" value={this.state["famous-for"]} placeholder=" enter movie/tv show" onChange={this.changeHandler}/>


                    <input type="text" name="happyImg" value={this.state.happyImg} placeholder="enter happy image" onChange={this.changeHandler}/>


                    <input type="text" name="sadImg" value={this.state.sadImg} placeholder="enter sad image" onChange={this.changeHandler}/>
                    <button>Create Animal</button>
                </form>
            </div>
        )
    }
}

export default Form