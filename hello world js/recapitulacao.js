const nome = "Ana"
let diaUtil

for(dia = 1; dia <= 7; dia++) {
    console.log(`Início do dia ${dia}`)

    if(dia == 6||dia == 7){
        diaUtil = false
        console.log("Dia de fim de semana")
    } else {
        diaUtil = true
        console.log("Dia de meio de semana")
    }

    if(diaUtil) {
       let periodoDoDia = "manhã"

       while(periodoDoDia != "madrugada") {
            switch(periodoDoDia) {
                case "manhã":
                      console.log(`Durante a manhã, a ${nome} está estudando`)
                      periodoDoDia = "tarde"
                      break
                case "tarde":
                      console.log(`Durante a tarde, a ${nome} está fazendo atividades`)
                      periodoDoDia = "noite"
                      break
            default:
                console.log(`Durante a noite, a ${nome} está com tempo livre`)
                periodoDoDia = "madrugada"                
            }
       }
    }else {
        console.log(`${nome} está descansando`)
    }

    console.log("Final do dia " + dia)
    console.log("*************************")
}
/*
saída:
Início do dia 1
Dia de meio de semana
Durante a manhã, a Ana está estudando
Durante a tarde, a Ana está fazendo atividades
Durante a noite, a Ana está com tempo livre
Final do dia 1
*************************
Início do dia 2
Dia de meio de semana
Durante a manhã, a Ana está estudando
Durante a tarde, a Ana está fazendo atividades
Durante a noite, a Ana está com tempo livre
Final do dia 2
*************************
Início do dia 3
Dia de meio de semana
Durante a manhã, a Ana está estudando
Durante a tarde, a Ana está fazendo atividades
Durante a noite, a Ana está com tempo livre
Final do dia 3
*************************
Início do dia 4
Dia de meio de semana
Durante a manhã, a Ana está estudando
Durante a tarde, a Ana está fazendo atividades
Durante a noite, a Ana está com tempo livre
Final do dia 4
*************************
Início do dia 5
Dia de meio de semana
Durante a manhã, a Ana está estudando
Durante a tarde, a Ana está fazendo atividades
Durante a noite, a Ana está com tempo livre
Final do dia 5
*************************
Início do dia 6
Dia de fim de semana
Ana está descansando
Final do dia 6
*************************
Início do dia 7
Dia de fim de semana
Ana está descansando
Final do dia 7
**************************
*/