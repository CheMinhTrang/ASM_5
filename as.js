const axios = require('axios').default;
const api = 'https://api.covid19api.com/summary'

async function getDataCovid() {
    try {
      const response = await axios.get(api);
      if(response) {
        console.log(`✔✔✔Đã lấy dữ liệu thành công, đang xuất thống kê:
        `)
        setTimeout(() => {
          const highestNumberOfDeath = getMaxNumberOfDeath(getNumberOfDeathAllCountries(response.data.Countries))
          const highestNumberOfNewConfirmed = getMaxNumberOfNewConfirmed(getNumberOfNewConfirmed(response.data.Countries))
          
          function getCountryHAsMaxNumberOfDeath (arr) {
            return arr.find(el => {
              return el.TotalDeaths === highestNumberOfDeath
            })
          }
  
          function getCountryHAsMaxNumberOfNewConfirmed (arr) {
            return arr.find(el => {
              return el.NewConfirmed === highestNumberOfNewConfirmed
            })
          }
  
  
          
          const countryWithHighestNumberOfDeath  = getCountryHAsMaxNumberOfDeath(response.data.Countries).Country
          const countryWithHighestNumberOfNewConfirmed = getCountryHAsMaxNumberOfNewConfirmed(response.data.Countries).Country
          
          console.log('📝 Dữ liệu Covid hôm nay:📋')
        console.log(`
        -😷😷Nhiễm mới:${response.data.Global.NewConfirmed}      
        - 💀💀Số người chết mới: ${response.data.Global.NewDeaths}
        - 📈📈Tổng số người chết:${response.data.Global.TotalDeaths}
        -Quốc Gia có số lượng tổng cộng người chết nhiều nhất là: ${countryWithHighestNumberOfDeath } (${highestNumberOfDeath} người)
        - Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất là: ${countryWithHighestNumberOfNewConfirmed} (${highestNumberOfNewConfirmed} người)`)
        },2000)
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  function getNumberOfDeathAllCountries(countries) {
    return countries.map((number) => {
      return number.TotalDeaths
    })
  }
  
  function getNumberOfNewConfirmed(countries) {
    return countries.map((number) => {
      return number.NewConfirmed
    })
  }
  
  function getMaxNumberOfDeath (total) {
    return Math.max.apply(null, total)
  }
  
  function getMaxNumberOfNewConfirmed (total) {
    return Math.max.apply(null, total)
  }

async function main () {
    console.log(`🔎🔎🔎Đang lấy dữ liệu, xin vui lòng chờ......
    `)
    await getUser()
}

main();
