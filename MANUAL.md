# /home/steve/Source/radio-anarchy/bin/build-gps-signal-payload
```
Usage: build-gps-signal-payload [options]

Options:
  --gpssim-download-compile          Download & compile gps-sdr-sim
  --gpssim-download-ephemeris        Download & build ephemeris data
  --gpssim-binary <file>             Path to gps-sdr-sim binary (default:
                                     "/home/steve/Source/radio-anarchy/build/gps-sdr-sim-master/gps-sdr-sim")
  --gpssim-output <path>             Path to output binary signal file
                                     (default:
                                     "/home/steve/Source/radio-anarchy/payloads")
  --gpssim-ephemeris <file or path>  Path to ephemeris files (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --gpssim-iq-bits <bits>            IQ bits (default: 8)
  --gpssim-duration <duration>       Duration to simulate
  --gpssim-latitude <latitude>       Latitude to simulate
  --gpssim-longitude <longitude>     Longitude to simulate
  --gpssim-altitude <altitude>       Altitude to simulate
  --gpssim-build-path <directory>    Build path for gps-sdr-sim (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --earthdata-path <directory>       Directory to download brdc data (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --earthdata-user <username>        urs.earthdata.nasa.gov username
  --earthdata-pass <password>        urs.earthdata.nasa.gov password
  --nobanner                         Omit the banner (default: false)
  -h, --help                         display help for command
```

# /home/steve/Source/radio-anarchy/bin/compile-gps-sdr-sim
```
Usage: compile-gps-sdr-sim [options]

Options:
  --gpssim-build-path <directory>  Build path for gps-sdr-sim (default:
                                   "/home/steve/Source/radio-anarchy/build")
  --nobanner                       Omit the banner (default: false)
  -h, --help                       display help for command
```

# /home/steve/Source/radio-anarchy/bin/download-urs-earthdata-ephemeris
```
Usage: download-urs-earthdata-ephemeris [options]

Options:
  --earthdata-path <directory>  Directory to download brdc data (default:
                                "/home/steve/Source/radio-anarchy/build")
  --earthdata-user <username>   urs.earthdata.nasa.gov username
  --earthdata-pass <password>   urs.earthdata.nasa.gov password
  --nobanner                    Omit the banner (default: false)
  -h, --help                    display help for command
```

# /home/steve/Source/radio-anarchy/bin/gps-spoof
```
Usage: gps-spoof [options]

Options:
  -p, --payload <file or path>       Payload, or payload directory (default:
                                     "/home/steve/Source/radio-anarchy/payloads")
  --hrftx-payload <file or path>     Payload to transmit (default:
                                     "/home/steve/Source/radio-anarchy/payloads")
  --hrftx-frequency <frequency>      Transmit frequency
  --hrftx-samplerate <sample rate>   Transmit sample rate
  --hrftx-gain <gain>                TX VGA (IF) gain, 0-47dB, 1dB steps
  --hrftx-amplify                    Use RX/TX RF amplifier (default: true)
  --hrftx-confirm                    Don't ask for confirmation before
                                     transmitting (default: false)
  --gpssim-download-compile          Download & compile gps-sdr-sim
  --gpssim-download-ephemeris        Download & build ephemeris data
  --gpssim-binary <file>             Path to gps-sdr-sim binary (default:
                                     "/home/steve/Source/radio-anarchy/build/gps-sdr-sim-master/gps-sdr-sim")
  --gpssim-output <path>             Path to output binary signal file
                                     (default:
                                     "/home/steve/Source/radio-anarchy/payloads")
  --gpssim-ephemeris <file or path>  Path to ephemeris files (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --gpssim-iq-bits <bits>            IQ bits (default: 8)
  --gpssim-duration <duration>       Duration to simulate
  --gpssim-latitude <latitude>       Latitude to simulate
  --gpssim-longitude <longitude>     Longitude to simulate
  --gpssim-altitude <altitude>       Altitude to simulate
  --gpssim-build-path <directory>    Build path for gps-sdr-sim (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --earthdata-path <directory>       Directory to download brdc data (default:
                                     "/home/steve/Source/radio-anarchy/build")
  --earthdata-user <username>        urs.earthdata.nasa.gov username
  --earthdata-pass <password>        urs.earthdata.nasa.gov password
  --nobanner                         Omit the banner (default: false)
  -h, --help                         display help for command
```

# /home/steve/Source/radio-anarchy/bin/gsm-dump
```
Usage: gsm-dump [options]

Options:
  --nobanner  Omit the banner (default: false)
  -h, --help  display help for command
```

# /home/steve/Source/radio-anarchy/bin/hackrf-transmit
```
Usage: hackrf-transmit [options]

Options:
  --hrftx-payload <file or path>    Payload to transmit (default:
                                    "/home/steve/Source/radio-anarchy/payloads")
  --hrftx-frequency <frequency>     Transmit frequency
  --hrftx-samplerate <sample rate>  Transmit sample rate
  --hrftx-gain <gain>               TX VGA (IF) gain, 0-47dB, 1dB steps
  --hrftx-amplify                   Use RX/TX RF amplifier (default: true)
  --hrftx-confirm                   Don't ask for confirmation before
                                    transmitting (default: false)
  --nobanner                        Omit the banner (default: false)
  -h, --help                        display help for command
```

# /home/steve/Source/radio-anarchy/bin/rf-jammer
```
Usage: rf-jammer [options]

Options:
  -c, --common <CB_CH1|CB_CH2|CB_CH3|CB_CH4|CB_CH5|CB_CH6|CB_CH7|CB_CH8|CB_CH9|CB_CH10|CB_CH11|CB_CH12|CB_CH13|CB_CH14|CB_CH15|CB_CH16|CB_CH17|CB_CH18|CB_CH19|CB_CH20|CB_CH21|CB_CH22|CB_CH23|CB_CH24|CB_CH25|CB_CH26|CB_CH27|CB_CH28|CB_CH29|CB_CH30|CB_CH31|CB_CH32|CB_CH33|CB_CH34|CB_CH35|CB_CH36|CB_CH37|CB_CH38|CB_CH39|CB_CH40|MURS_CH1|MURS_CH2|MURS_CH3|MURS_CH4|MURS_CH5|FRS_CH1|FRS_CH2|FRS_CH3|FRS_CH4|FRS_CH5|FRS_CH6|FRS_CH7|FRS_CH8|FRS_CH9|FRS_CH10|FRS_CH11|FRS_CH12|FRS_CH13|FRS_CH14|FRS_CH15|FRS_CH16|FRS_CH17|FRS_CH18|FRS_CH19|FRS_CH20|FRS_CH21|FRS_CH22>  Use a common radio channel/configuration
  --rfsignal-signal <gaussian|sine|const|gaussian|uniform|2tone|sweep|gsm>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Signal to transmit
  --rfsignal-frequency <frequency>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Signal frequency
  --rfsignal-waveform1-frequency <frequency>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Signal waveform frequency
  --rfsignal-waveform2-frequency <frequency>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Signal waveform2 frequency
  --rfsignal-samplerate <sample rate>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Signal sample rate
  --rfsignal-gain <gain>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Set gain in dB (default is midpoint)
  --rfsignal-amplitude <amplitude>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Set output amplitude to AMPL (0.1-1.0)
  --rfsignal-confirm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Don't ask for confirmation before transmitting (default: false)
  --nobanner                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Omit the banner (default: false)
  -h, --help                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       display help for command
```

# /home/steve/Source/radio-anarchy/bin/transmit-rf-signal
```
Usage: transmit-rf-signal [options]

Options:
  --rfsignal-signal <gaussian|sine|const|gaussian|uniform|2tone|sweep|gsm>  Signal to transmit
  --rfsignal-frequency <frequency>                                          Signal frequency
  --rfsignal-waveform1-frequency <frequency>                                Signal waveform frequency
  --rfsignal-waveform2-frequency <frequency>                                Signal waveform2 frequency
  --rfsignal-samplerate <sample rate>                                       Signal sample rate
  --rfsignal-gain <gain>                                                    Set gain in dB (default is midpoint)
  --rfsignal-amplitude <amplitude>                                          Set output amplitude to AMPL (0.1-1.0)
  --rfsignal-confirm                                                        Don't ask for confirmation before transmitting (default: false)
  --nobanner                                                                Omit the banner (default: false)
  -h, --help                                                                display help for command
```

