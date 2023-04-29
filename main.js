// Initialize Channels client
let channels = new Pusher('9e3a0664ddd5f74a3693', {
  cluster: 'ap3',
})

// Subscribe to the appropriate channel
let channel = channels.subscribe('jovial-swamp-85')

// Bind a callback function to an event within the subscribed channel
channel.bind('event-name', function (data) {
  // Do what you wish with the data from the event
	console.log(data);
  console.log('connect!!!!!')
})

channel.bind('event2', function (data) {
  // Do what you wish with the data from the event
	console.log(data);
  console.log('connect2!!!!!')
})


async function pushData(data) {
  const res = await fetch('/api/channels-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.error('failed to push data')
  }
}
