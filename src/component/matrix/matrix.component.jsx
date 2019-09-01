import React, { Component } from 'react';
import './matrix.styles.css';

class Matrix extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectedNumber: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    
    handleInputChange(event) {
        this.setState({ selectedNumber: event.target.value})
    }
    
    renderTable() {
        let size = this.state.selectedNumber;
        let table = [];
    
        for (let i = 1; i <= size; i++) {
            let children = []
            for (let j = 1; j <= size; j++) {
            children.push(<td key={i*j} className="table-element">{`${j * i}`}</td>)
            }
            table.push(<tr key={i}>{children}</tr>)
        }
        return table        
    }

    render() { 
        return (
            <div className="container">   
                <input type="number" name="number" onChange={this.handleInputChange} id="input-field" />
                <table>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Matrix;