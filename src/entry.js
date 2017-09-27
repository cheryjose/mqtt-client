var mqtt = require("mqtt")

var mqttClient = mqtt.connect("ws://localhost:1884", {
    keepalive: 400
})

mqttClient.on("connect", () => {
    
    console.log("Connect")

    mqttClient.on("reconnecting", () => {
        console.log("Reconnecting")
    })

    mqttClient.on("close", () => {
        console.log("Close")
    })

    mqttClient.subscribe("tst", (err, granted) => {
        if (err) {
            console.log("Error, could not subscribe to tst")
        }
        console.log("Subscribed")
    })

    mqttClient.on("message", (topic, payload, packet) => {
      if (topic === "tst") {
          console.log(`Message ${payload.toString("ascii")}`)
      }
    })
})

mqttClient.on("offline", () => {
    console.log("Offline")
})

mqttClient.on("error", () => {
    console.log("Error")
})
