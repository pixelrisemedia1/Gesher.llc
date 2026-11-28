/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AboutUs from './pages/AboutUs';
import BendyPly from './pages/BendyPly';
import BirchPly from './pages/BirchPly';
import CementBoard from './pages/CementBoard';
import Chipboard from './pages/Chipboard';
import CommercialPly from './pages/CommercialPly';
import ContactUs from './pages/ContactUs';
import FRMDF from './pages/FRMDF';
import FalcataPly from './pages/FalcataPly';
import FilmfacedPly from './pages/FilmfacedPly';
import Flooring from './pages/Flooring';
import Gallery from './pages/Gallery';
import Hardwood from './pages/Hardwood';
import HardwoodLogs from './pages/HardwoodLogs';
import HollowChipboard from './pages/HollowChipboard';
import Home from './pages/Home';
import ImageViewer from './pages/ImageViewer';
import JumboMDF from './pages/JumboMDF';
import Logs from './pages/Logs';
import MDF from './pages/MDF';
import MRMDF from './pages/MRMDF';
import MelamineMDF from './pages/MelamineMDF';
import OSB from './pages/OSB';
import PlainMDF from './pages/PlainMDF';
import Plywood from './pages/Plywood';
import SawnTimber from './pages/SawnTimber';
import Softwood from './pages/Softwood';
import SoftwoodLogs from './pages/SoftwoodLogs';
import SolidChipboard from './pages/SolidChipboard';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AboutUs": AboutUs,
    "BendyPly": BendyPly,
    "BirchPly": BirchPly,
    "CementBoard": CementBoard,
    "Chipboard": Chipboard,
    "CommercialPly": CommercialPly,
    "ContactUs": ContactUs,
    "FRMDF": FRMDF,
    "FalcataPly": FalcataPly,
    "FilmfacedPly": FilmfacedPly,
    "Flooring": Flooring,
    "Gallery": Gallery,
    "Hardwood": Hardwood,
    "HardwoodLogs": HardwoodLogs,
    "HollowChipboard": HollowChipboard,
    "Home": Home,
    "ImageViewer": ImageViewer,
    "JumboMDF": JumboMDF,
    "Logs": Logs,
    "MDF": MDF,
    "MRMDF": MRMDF,
    "MelamineMDF": MelamineMDF,
    "OSB": OSB,
    "PlainMDF": PlainMDF,
    "Plywood": Plywood,
    "SawnTimber": SawnTimber,
    "Softwood": Softwood,
    "SoftwoodLogs": SoftwoodLogs,
    "SolidChipboard": SolidChipboard,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};