import * as moment from "moment"

moment.locale("pt-br")

type event = {
    name: string,
    description: string,
    dateInitial: moment.Moment,
    dateFinal: moment.Moment
}

const allEvents: event[] = [
    {
		name: "Reunião",
		description: "Reunião muito importante",
		dateInitial: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	dateFinal: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniãozinha",
		description: "Reunião não muito importante",
		dateInitial: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	dateFinal: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

function mostrar(events: event[]):void{
    events.forEach((item: event)=>{

        const duration = item.dateFinal.diff(item.dateInitial, "minutes")
        const today = moment()

        const daysUntilEvent = item.dateInitial.diff(today, "days")
        
        console.log(`
        Nome: ${item.name}
        Horário de início: ${item.dateInitial.format('dddd, DD [de] MMMM YYYY, HH:mm')}
        Horário de fim: ${item.dateFinal.format('DD [de] MMMM YYYY HH:mm')}
        Descrição: ${item.description}
        Duração: ${duration} minutos
        Dias ate o evento: ${daysUntilEvent}
        `)
    })
}

function createEvent(
    name: string, 
    description: string, 
    dateInitial: moment.Moment, 
    dateFinal: moment.Moment): void{

    if(!name || !description || !dateInitial || !dateFinal){
        console.log("Invalid input")
        return
    }
    const diffDateInitial = dateInitial.diff(moment(), "seconds");
    const diffDateFinal = dateFinal.diff(moment(), "seconds")

    if(diffDateInitial < 0 && diffDateFinal < 0){
        console.log("date cannot be prior to the current date")
        return
    }

    allEvents.push({
        name, description, dateInitial, dateFinal
    })
}

console.log(mostrar(allEvents))