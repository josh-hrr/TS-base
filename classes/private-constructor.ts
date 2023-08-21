(() => {


    class Apocalipsis {

        static instance: Apocalipsis;

        //private concept applies for contructor
        private constructor(public name:string){

        } 

        static callApocalipsis(): Apocalipsis{
            if( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis private');
            }
            return Apocalipsis.instance;
        }
        
        
    }

    //Singleton desing pattern
    //a class can have a sigle instance with a global accees point

    const apocalipsis1 = Apocalipsis.callApocalipsis();

    const apocalipsis2 = Apocalipsis.callApocalipsis();

    const apocalipsis3 = Apocalipsis.callApocalipsis();

}) ()