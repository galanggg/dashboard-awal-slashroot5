import React from "react"

function SubmitFlag() {
  return (
    <div className="column is-10">
      <h1
        className="is-size-5 has-text-weight-semibold"
        style={{ marginTop: "25px!important", marginBottom: "6px!important" }}
      >
        Team Information
      </h1>
      <hr
        style={{
          border: "solid 1px rgb(229, 229, 229!important",
          margin: "0px!important",
        }}
      />
      <div className="columns" style={{ marginTop: "1%!important" }}>
        <div className="column">
          <span>
            Team ID:
            <span className="tag">T01</span>
          </span>
        </div>
        <div className="column">
          <span>
            Team Name:
            <span className="tag">mentimun_mentah</span>
          </span>
        </div>
      </div>
      <hr
        style={{
          border: "solid 1px rgb(229, 229, 229!important",
          margin: "0px!important",
        }}
      />
      <div className="columns">
        <div className="column is-half">
          <div className="box" style={{ marginTop: "10px!important" }}>
            <p>
              Copy paste the below token to cookie x-flagger-token to share your
              current session with others. The token is a JWT token, reflecting
              current session that you have
            </p>
            <pre
              style={{
                marginTop: "10px!important",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODcxOTE0NTAsIm5iZiI6MTU4NzE5MTQ1MCwianRpIjoiNjg3ZDk3ZTAtYjUzYi00ZTI0LThhZDQtYWNjNzIxMTg0NzViIiwiZXhwIjoxNTg3MTkyMzUwLCJpZGVudGl0eSI6NCwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.ZTDpZvnrtmS3mp2PrMuK7rAfxc1J8z8WVIp9_KPduL0
            </pre>
          </div>
        </div>
        <div className="column is-half">
          <div className="box" style={{ marginTop: "10px!important" }}>
            <div className="content">
              <h1>Submit Flag</h1>
              <p>Submit all flags here</p>
              <p className="has-text-weight-semibold">
                Current Round / Tick:
                <span className="tag">R09</span>
              </p>
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Flag" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-link is-capitalized is-fullwidth">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="is-size-5">Unlocked services</h1>
      <p className="is-italic" style={{ marginTop: "4px" }}>
        There is no unlocked service yet!
      </p>
    </div>
  )
}

export default SubmitFlag
