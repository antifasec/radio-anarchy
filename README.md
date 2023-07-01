# radio-anarchy

Radio software for community defense

## Dependencies

- node
- gcc
- gzip
- hackrf_transfer

## Setup

```sh
git clone https://github.com/antifasec/radio-anarchy
cd radio-anarchy
npm install
```

### gsm-dump

Inspired by [gr-gsm](https://github.com/ptrkrysik/gr-gsm)

### Usage

```
> $ ./bin/gsm_dump
               __  _ ____                    
  ____ _____  / /_(_) __/___ _________  _____
 / __ `/ __ \/ __/ / /_/ __ `/ ___/ _ \/ ___/
/ /_/ / / / / /_/ / __/ /_/ (__  )  __/ /__
\__,_/_/ /_/\__/_/_/  \__,_/____/\___/\___/ 

radio-anarchy 0.0.0

> Radio software for community defense 

Not yet implemented
```

### gps-spoof

Inspired by [GPSpoof](https://github.com/last-byte/GPSpoof)
Inspired by [gps-srd-sim](https://github.com/osqzss/gps-sdr-sim)

#### Usage

```
> $ ./bin/gps-spoof --help
               __  _ ____                    
  ____ _____  / /_(_) __/___ _________  _____
 / __ `/ __ \/ __/ / /_/ __ `/ ___/ _ \/ ___/
/ /_/ / / / / /_/ / __/ /_/ (__  )  __/ /__
\__,_/_/ /_/\__/_/_/  \__,_/____/\___/\___/ 

radio-anarchy 0.0.0

> Radio software for community defense 

Usage: gps-spoof [options]

Options:
  --cleanup                  Remove all build artifacts (default: false)
  -c, --compile              Download and compile gps-sdr-sim (requires gcc in PATH) (default: false)
  -b, --build                Build/Rebuild `brdc.bin` (default: false)
  --file <file>              BRDC file to build
  --lat <latitude>           Latitude (default: "37.81992761194152")
  --lng <longitude>          Longitude (default: "-122.47824792916177")
  --alt <altitude>           Altitude (default: "0")
  --runtime <runtime>        Runtime (default: "60")
  -d, --download             Download brdc data from nasa.gov (default: false)
  --user <username>          urs.earthdata.nasa.gov username
  --pass <password>          urs.earthdata.nasa.gov password
  -t, --transmit <file>      Transmit file via hackrf (requires `hackrf_transfer` in PATH)
  --freq <frequency>         Transmit frequency (default: "1575420000")
  --samplerate <sampleRate>  Transmit sample rate (default: "2600000")
  --txgain <txGain>          TX VGA (IF) gain, 0-47dB, 1dB steps (default: "0")
  --amplify                  RX/TX RF amplifier (default: true)
  --nowait                   Don't wait to start transmitting (default: false)
  -h, --help                 display help for command
```