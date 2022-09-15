interface PersonAttributes{
  FirstName : string,
  LastName : string,
  BirthDate : Date,
  isAlive : Boolean
}

export class Person {
  private props: PersonAttributes 
  
  get FirstName(){
    return this.props.FirstName
  }
  get Lastname(){
    return this.props.LastName
  }
  get BirthDate(){
    return this.props.BirthDate
  }  
  get IsAlive(){
    return this.props.isAlive
  }  
  // sayHi:(): string => {return "Hello!!"}   
  constructor  (props: PersonAttributes){  
    const {isAlive} = props
    if (isAlive!=true) {
      throw new Error('Person must be alive')
    }
    this.props = props
  }
}