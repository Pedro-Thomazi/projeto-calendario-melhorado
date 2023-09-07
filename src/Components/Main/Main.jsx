import { useEffect, useState } from 'react'

import styles from './Main.module.css'

const Main = () => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  // const daysOfWeek = [
  //   'Domingo',
  //   'Segunda-Feira',
  //   'Terça-Feira',
  //   'Quarta-Feira',
  //   'Quinta-Feira',
  //   'Sexta-Feira',
  //   'Sábado'
  // ]

  const daysOfWeek = [
    { name: 'Domingo'},
    { name: 'Segunda-Feira'},
    { name: 'Terça-Feira'},
    { name: 'Quarta-Feira'},
    { name: 'Quinta-Feira'},
    { name: 'Sexta-Feira'},
    { name: 'Sábado'}
  ]

  const date = new Date()
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())


  // Primeiro dia do mês na semana
  const firstDayMonth = new Date(year, month, 1).getDay() - 1
  // Quantidade de dias no mês correspondente
  const lastDayMonth = new Date(year, month + 1, 0).getDate()


  const getDaysCalendar = () => {
    const tableDays = document.querySelector('#daysCalendar')


    // Laço de repetição com a quantidade de dias no mês. 42 pq na tabela tem 42 espaços para os dias. Nessa tabela tem dias do mês anterior, mês atual e proximo mês. 
    for (let i = -firstDayMonth, index = 0; i < (42 - firstDayMonth); i++, index++) {
      let dt = new Date(year, month, i)
      const dayTable = tableDays.querySelectorAll('td')[index]

      // Add os dias na tabela do mês anterior, mês atual e proximo mês.
      dayTable.innerHTML = dt.getDate()

      // Remoção de todos os estilos
      dayTable.classList.remove(styles.today)
      dayTable.classList.remove(styles.prevMonth)
      dayTable.classList.remove(styles.nextMonth)

      // Se o dia selecionado é exatamente igual ao dia de hoje.
      if (dt.getFullYear() === date.getFullYear() && dt.getMonth() === date.getMonth() && dt.getDate() === date.getDate()) {
        dayTable.classList.add(styles.today)
      }

      // Mês anterior
      if (i < 1) {
        dayTable.classList.add(styles.prevMonth)
      }

      // Proximo mês
      if (i > lastDayMonth) {
        dayTable.classList.add(styles.nextMonth)
      }
      // console.log(dayTable)
    }
  }

  const nextMonth = () => {
    setMonth(month + 1)
    if (month >= 11) {
      setMonth(0)
      setYear(year + 1)
    }
  }

  const prevMonth = () => {
    setMonth(month - 1)
    if (month <= 0) {
      setMonth(11)
      setYear(year - 1)
    }
  }



  // Se eu tentar deixar a função getDaysInCalendar() ser chamada fora, não funciona o querySelectorAll. E a função é chamada automaticamente
  useEffect(() => {
    getDaysCalendar()
  })

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.search}>
          <input type="text" placeholder='Pesquisar' />
          <i className="bi bi-search"></i>
        </div>
        <div className={styles.configsMonth}>
          <div className={styles.nextOrPrev}>
            <i id='next' onClick={nextMonth} className="bi bi-arrow-up"></i>
            <i id='prev' onClick={prevMonth} className="bi bi-arrow-down"></i>
          </div>
          <h2>{months[month]} de {year}</h2>
        </div>
      </header>
      <section className={styles.principalCalendar}>
        <div className={styles.calendar}>
          <table>
            <thead id='weeksDay'>
              <tr>
                {daysOfWeek.map((day, id) => (
                    <th key={id}>{day.name}</th>
                ))}
              </tr>
            </thead>
            <tbody id='daysCalendar'>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Main