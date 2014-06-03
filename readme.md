## Colorvert + Express API Implementation

An easy-to-use color conversion API written in node and Express. 

It uses the [colorvert](https://github.com/jpederson/node-colorvert) to perform color conversions. If you need the color conversion modules only, that's where you should look.

If you only need conversions between ICC profiles (CMYK, Lab, XYZ, RGB) and don't need the math-based conversions, you should take a look at the `transicc` node module, which colorvert uses to perform those.

*****

### Installation Requirements

You must first install LittleCMS, an tiny open source Python library for converting colors using ICC profiles. This shell script will get you there.

```shell
git clone https://github.com/mm2/Little-CMS.git
cd Little-CMS
./configure 
make 
make check 
sudo make install
```

Once you've installed that dependency, you're ready to install colorvert-api and start serving your color API!

```shell
npm install colorvert-api --save
```

More documentation on running the server to come as it's finished being developed.