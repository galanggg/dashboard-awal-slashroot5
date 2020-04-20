import React from "react"

function Scoreboard() {
  return (
    <div className="column is-10">
      <div className="box" style={{ marginTop: "1%" }}>
        <div className="columns has-text-centered">
          <div className="column">
            <p className="has-text-weight-bold">Games ends in</p>
            01:54:23
          </div>
          <div className="column">
            <p className="has-text-weight-bold">Current Tick</p>
            09
          </div>
          <div className="column">
            <p className="has-text-weight-bold">Next tick about</p>
            02:54
          </div>
        </div>
      </div>
      <div className="box">
        <p
          className="is-size-4 has-text-weight-bold"
          style={{ marginBottom: "1%" }}
        >
          Full Scoreboard
        </p>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>#</th>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>S01</th>
              <th>S02</th>
              <th>S03</th>
              <th>S04</th>
              <th>S05</th>
              <th>S06</th>
              <th>S07</th>
              <th>Attack Pts</th>
              <th>Defense Pts</th>
              <th>Total Pts</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr v-for="n in 10" :key="n">
            <th>{{n}}</th>
            <td>T{{n}}</td>
            <td>mentimun_mentah</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr> */}
          </tbody>
        </table>
      </div>

      <div className="box">
        <p
          className="is-size-4 has-text-weight-bold"
          style={{ marginBottom: "1%" }}
        >
          Per Round Scoreboard
        </p>
        <div className="tabs is-centered is-boxed">
          {/* <ul>
          <li :className="active_tab == n ? 'is-active' : '' " v-for="n in 9" :key="n">
            <a @click="changetab(n)">
              <span>R0{{n}}</span>
            </a>
          </li>
        </ul> */}
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>#</th>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>S01</th>
              <th>S02</th>
              <th>S03</th>
              <th>S04</th>
              <th>S05</th>
              <th>S06</th>
              <th>S07</th>
              <th>Attack Pts</th>
              <th>Defense Pts</th>
              <th>Total Pts</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr v-for="n in 10" :key="n">
          <th>{{n}}</th>
          <td>T{{n}}</td>
          <td>mentimun_mentah</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0/0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Scoreboard
