import vant from 'vant';
import 'vant/lib/index.css';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';


export default function(app){
  app.use(vant);
  Locale.use('en-US', enUS);
}