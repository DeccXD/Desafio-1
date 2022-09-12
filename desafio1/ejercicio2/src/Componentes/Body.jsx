import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'

function Body(props) {
    const conversiones = () =>{
        let inputLibra =  document.getElementById("libra").value;
        let inputOnza = document.getElementById("onza");
        let inputKilo = document.getElementById("kilogramo");
        let inputGramo= document.getElementById("gramo");
        if(inputLibra <=0)
        {
            inputOnza.value = 0;
            inputKilo.value = 0;
            inputGramo.value = 0;
        }
        else
        {
            let onza =  inputLibra*16;
            let kilogramo = inputLibra*0.453592;  
            let gramo = inputLibra*453.592;
    
           
    
            inputOnza.value = onza;
            inputKilo.value = kilogramo;
            inputGramo.value = gramo;
        }
        
    
    }
  return (
    <>
    <div className='container'>
            <div className='row'>
            <div className='col-sm-12'>
            <br/>
            
  <div class="form-group mb-2">
    
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" disabled value="DIGITE LIBRA"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">CANTIDAD EN LIBRAS</label>
    <input type="number" class="form-control" id="libra" placeholder="cantidad en libras"/>
  </div>
  <button onClick={conversiones}  class="btn btn-primary mb-2">CONVERSION</button>

<div className='row'>
    <div className='col-sm-12'>
    <div className='row'>
        <div className='col-sm-4'>
        <label>CANTIDAD EN ONZAS:</label>
        </div>
        <dvi className="col-sm-8">
        <input type="number" class="form-control" id="onza" disabled placeholder="cantidad en libras"/>
        </dvi>

    </div>
   
    </div>
    <div className='col-sm-12'>
    <div className='row'>
        <div className='col-sm-4'>
        <label>CANTIDAD EN KILOGRAMO:</label>
        </div>
        <dvi className="col-sm-8">
        <input type="number" class="form-control" id="kilogramo" disabled placeholder="cantidad en libras"/>
        </dvi>
        </div>
    </div>
    <div className='col-sm-12'>
    <div className='row'>
        <div className='col-sm-4'>
        <label>CANTIDAD EN GRAMOS:</label>
        </div>
        <dvi className="col-sm-8">
        <input type="number" class="form-control" id="gramo" disabled placeholder="cantidad en libras"/>
        </dvi>
    </div>
    </div>

</div>
            </div>

            </div>
    </div>
       
    </>
  )
}

Body.propTypes = {}

export default Body
