export class apiError extends Error{
  constructor(status,message)
  {
      super(message);
      this.status = status;
      this.message = message;
  }

toJSON(){
return {
    status : this.status,
    message : this.message
  }
}
}


