function updateTime () {
  // LOS ANGELES
  let losAngelesEl = document.querySelector('#los-angeles')
  let losAngelesDateEl = losAngelesEl.querySelector('.date')
  let losAngelesTimeEl = losAngelesEl.querySelector('.time')

  let losAngelesDate = moment().format('MMMM Do, YYYY')
  let losAngelesTime = moment().tz('America/Los_Angeles')

  losAngelesDateEl.innerHTML = losAngelesDate
  losAngelesTimeEl.innerHTML = `${losAngelesTime.format(
    'h:mm:ss [<small>]A[</small>]'
  )}`

  // SYDNEY
  let sydneyEl = document.querySelector('#sydney')
  let sydneyDateEl = sydneyEl.querySelector('.date')
  let sydneyTimeEl = sydneyEl.querySelector('.time')

  let sydneyDate = moment().format('MMMM Do, YYYY')
  let sydneyTime = moment().tz('Australia/Sydney')

  sydneyDateEl.innerHTML = sydneyDate
  sydneyTimeEl.innerHTML = `${sydneyTime.format(
    'h:mm:ss [<small>]A[</small>]'
  )}`

  // TOKYO
  let tokyoEl = document.querySelector('#tokyo')
  let tokyoDateEl = tokyoEl.querySelector('.date')
  let tokyoTimeEl = tokyoEl.querySelector('.time')

  let tokyoDate = moment().format('MMMM Do, YYYY')
  let tokyoTime = moment().tz('Asia/Tokyo')

  tokyoDateEl.innerHTML = tokyoDate
  tokyoTimeEl.innerHTML = `${tokyoTime.format('h:mm:ss [<small>]A[</small>]')}`

  // PARIS
  let parisEl = document.querySelector('#paris')
  let parisDateEl = parisEl.querySelector('.date')
  let parisTimeEl = parisEl.querySelector('.time')

  let parisDate = moment().format('MMMM Do, YYYY')
  let parisTime = moment().tz('Europe/Paris')

  parisDateEl.innerHTML = parisDate
  parisTimeEl.innerHTML = `${parisTime.format('h:mm:ss [<small>]A[</small>]')}`
}

updateTime()
setInterval(updateTime, 1000)
