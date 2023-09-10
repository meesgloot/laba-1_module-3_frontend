const Counter = {
    data(){
        return{
            counter: 0,
            title: 'Cписок',
            inputString: "hi, bitch!",
            inputValue: '',
            notes: ['элемент 1','элемент 2']
        }
    },
    mounted(){
        setInterval(()=>{
            this.counter++
        },1000)
    },
    methods:{
        inputChangeValue(event){
            this.inputValue = event.target.value
        },
        addInputValue(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(idx){
            this.notes.splice(idx,1)
        }
        
    }
   
}

Vue.createApp(Counter).mount('#app')
