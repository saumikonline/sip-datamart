import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/en';
import 'dayjs/locale/bn';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/fa';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/ja';
import 'dayjs/locale/mr';
import 'dayjs/locale/ta';
import 'dayjs/locale/te';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
