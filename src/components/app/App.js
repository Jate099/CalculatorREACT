import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

function App() {

  function HandleNumber(number){
    console.log(number);
  }

  function HandleDisplayClick(){

  }
  return (
    <div className="App">
      <Display formula="10 +20" current="30"/>

      <section className="KeyBoardS">
        <Button type = "controller" value="CE"/>
        <Button type = "controller" value="C"/>
        <Button type = "controller" value="%"/>

        <Button type = "operator" value="+"/>
        <Button type = "controller" value="C"/>

        <Button type = "numberico" value="0"
        onClick={HandleNumber}/>
        <Button type = "numberico" value="1"
        onClick={HandleNumber}/>
        <Button type = "numberico" value="2"
        onClick={HandleNumber}/>
        <Button type = "operator" value="X"/>

        <Button type = "numberico" value="3"
        onClick={HandleNumber}/>
        <Button type = "numberico" value="4"
        onClick={HandleNumber}
        onClick={HandleNumber}/>
        <Button type = "numberico" value="5"
        onClick={HandleNumber}/>
        <Button type = "operator" value="-"/>

        <Button type = "numberico" value="6"
        onClick={HandleNumber}/>
        <Button type = "numberico" value="7"
        onClick={HandleNumber}/>
        <Button type = "numberico" value="8"
        onClick={HandleNumber}/>
        <Button type = "operator" value="="/>

        <Button type = "controller" value=","/>
        <Button type = "numberico" value="9"
        onClick={HandleNumber}/>
        <Button type = "controller" value="list"/>
      </section>

      
    </div>
  );
}

export default App;
