import styles from './LittleCalendar.module.css'

import { useState, useEffect } from 'react'

const LittleCalendar = () => {
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

  const date = new Date()
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())

  // Primeiro dia do mês na semana
  const firstDayMonth = new Date(year, month, 1).getDay() - 1
  // Quantidade de dias no mês correspondente
  const lastDayMonth = new Date(year, month + 1, 0).getDate()


  const getDaysInCalendar = () => {
    const tableDays = document.querySelector('#days')
    // console.log(dayTable)

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


  // console.log('Primeiro dia ' + firstDayMonth)
  // console.log('Ultimo dia ' + lastDayMonth)

  // Se eu tentar deixar a função getDaysInCalendar() ser chamada fora, não funciona o querySelectorAll. E a função é chamada automaticamente
  useEffect(() => {
    getDaysInCalendar()
  })

  return (
    <div className={styles.containerCalendar}>
      <div className={styles.calendar}>
        <div className={styles.headerCalendar}>
          <h3>{months[month]} de {year}</h3>
          <span className={styles.nextOrprevious}>
            <i id='next' onClick={nextMonth} className="bi bi-arrow-up"></i>
            <i id='prev' onClick={prevMonth} className="bi bi-arrow-down"></i>
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>D</th>
              <th>S</th>
              <th>T</th>
              <th>Q</th>
              <th>Q</th>
              <th>S</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody id='days'>
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
    </div>
  )
}

export default LittleCalendar

// https://www.youtube.com/watch?v=a815HQ2dwtU