// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue(
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    text: "Fare la spesa",
                    completed: false
                },
                {
                    text: "Portare fuori il cane",
                    completed: false
                },
                {
                    text: "Workout",
                    completed: false
                },
                {
                    text: "Lavare l'auto",
                    completed: false
                },
                {
                    text: "Mettere la lavatrice",
                    completed: false
                },
            ],
            newToDo: '',
        },

        methods:
        {
            removeToDo: function(indexToRemove) {

                var myIndex = indexToRemove;
                // console.log("removeToDo" , indexToRemove);
                this.toDoList.splice(myIndex, 1);
                
            },
            
            addToDo: function() {
                if(this.newToDo.trim().length > 0) {
                    this.toDoList.push({
                        text: this.newToDo,
                        completed: false
                    });
                    // riga sotto svuota il pannello dell'input
                    this.newToDo = "";
                }
            },
            
            lineThrough: function(list) {
                list.completed = !list.completed;
                console.log(list.completed);

            }
        }
    }
)