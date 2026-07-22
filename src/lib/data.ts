import { Subject } from './types';

// Sample lecture videos (placeholder public domain clips).
// Replace these URLs with real recorded lectures when available.
const SAMPLE_VIDEOS = [
  '/videos/operative-dentistry/Intro.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
];

export const subjects: Subject[] = [
  {
    id: 'operative-dentistry',
    name: 'Operative Dentistry',
    shortName: 'Operative',
    description: 'Diagnosis and restoration of teeth affected by caries, trauma, and structural defects.',
    color: '#00aeff',
    icon: 'Drill',
    chapters: [
      {
        id: 'intro-operative-dentistry',
        title: 'Introduction to Operative Dentistry',
        duration: '0:22',
        description: 'Overview of scope, goals, and principles of operative dentistry.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: 'What is the primary goal of operative dentistry?',
            options: [
              'Extraction of all decayed teeth',
              'Restoration of tooth form, function, and aesthetics',
              'Orthodontic alignment of teeth',
              'Surgical removal of impacted teeth',
            ],
            correctIndex: 1,
          },
          {
            id: 'q2',
            question: 'Which classification system is commonly used for carious lesions?',
            options: ["Angle's Classification", "Black's Classification", 'ASA Classification', 'Kennedy Classification'],
            correctIndex: 1,
          },
          {
            id: 'q3',
            question: 'Minimally invasive dentistry primarily aims to:',
            options: [
              'Remove as much tooth structure as possible',
              'Preserve healthy tooth structure while treating disease',
              'Avoid the use of any restorative material',
              'Replace all amalgam fillings',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 'dental-caries-pathology',
        title: 'Dental Caries: Etiology and Pathology',
        duration: '18:45',
        description: 'Understanding the disease process of dental caries and its progression.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'Which bacterium is most strongly associated with dental caries initiation?',
            options: ['Streptococcus mutans', 'Lactobacillus acidophilus', 'Actinomyces viscosus', 'Porphyromonas gingivalis'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'The caries process is best described as:',
            options: [
              'A purely mechanical wear process',
              'A dynamic process of demineralization and remineralization',
              'An irreversible one-way destructive process',
              'A viral infection of enamel',
            ],
            correctIndex: 1,
          },
          {
            id: 'q3',
            question: 'Which factor is NOT part of the caries balance model?',
            options: ['Diet and fermentable carbohydrates', 'Saliva flow', 'Fluoride exposure', 'Jaw bone density'],
            correctIndex: 3,
          },
          {
            id: 'q4',
            question: 'The earliest clinically visible sign of enamel caries is:',
            options: ['Cavitation', 'White spot lesion', 'Brown spot lesion', 'Pulp exposure'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 'cavity-preparation-principles',
        title: 'Principles of Cavity Preparation',
        duration: '20:10',
        description: 'Fundamental principles guiding tooth preparation for restorations.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: "Who is credited with establishing the original principles of cavity preparation?",
            options: ['G.V. Black', 'John Hunter', 'Willoughby Miller', 'Edward Angle'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Which of the following is a mechanical principle of cavity preparation?',
            options: ['Outline form', 'Occlusal adjustment', 'Pulp capping', 'Fluoride application'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Retention form in a cavity preparation refers to:',
            options: [
              'Shape given to prevent displacement of the restoration',
              'Removal of infected dentin',
              'Smoothing of cavity margins',
              'Reduction of pulp irritation',
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'composite-restorations',
        title: 'Composite Resin Restorations',
        duration: '16:55',
        description: 'Material properties and clinical technique for composite restorations.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'Composite resins bond to tooth structure primarily through:',
            options: ['Mechanical micro-retention via etching and bonding agents', 'Chemical fusion with enamel', 'Compression fit only', 'Magnetic adhesion'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Polymerization shrinkage in composites can lead to:',
            options: ['Improved marginal seal', 'Marginal gaps and microleakage', 'Increased translucency', 'Decreased wear resistance'],
            correctIndex: 1,
          },
          {
            id: 'q3',
            question: 'The incremental layering technique is used to:',
            options: [
              'Reduce the effect of polymerization shrinkage',
              'Increase treatment time unnecessarily',
              'Avoid the need for a curing light',
              'Replace the need for etching',
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'endodontics',
    name: 'Endodontics',
    shortName: 'Endo',
    description: 'Study and treatment of the dental pulp and periapical tissues, including root canal therapy.',
    color: '#0086ff',
    icon: 'Activity',
    chapters: [
      {
        id: 'pulp-anatomy-physiology',
        title: 'Pulp Anatomy and Physiology',
        duration: '14:20',
        description: 'Structure and function of the dental pulp complex.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: 'The dental pulp is composed of:',
            options: ['Connective tissue, nerves, blood vessels', 'Enamel rods only', 'Cementum layers', 'Keratinized epithelium'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Odontoblasts are responsible for:',
            options: ['Producing dentin', 'Producing enamel', 'Producing cementum', 'Producing saliva'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Which nerve fibers are primarily responsible for sharp, immediate pain in the pulp?',
            options: ['A-delta fibers', 'C fibers', 'Motor fibers', 'Autonomic fibers only'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'pulpal-diagnosis',
        title: 'Diagnosis of Pulpal and Periapical Disease',
        duration: '19:05',
        description: 'Clinical tests and criteria used to diagnose pulp conditions.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'Which test evaluates the vitality of the pulp using temperature change?',
            options: ['Thermal test', 'Percussion test', 'Palpation test', 'Mobility test'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Lingering pain to cold after stimulus removal suggests:',
            options: ['Reversible pulpitis', 'Irreversible pulpitis', 'Healthy pulp', 'Periodontal disease only'],
            correctIndex: 1,
          },
          {
            id: 'q3',
            question: 'A positive percussion test typically indicates inflammation of the:',
            options: ['Periodontal ligament', 'Enamel', 'Gingiva only', 'Tongue'],
            correctIndex: 0,
          },
          {
            id: 'q4',
            question: 'Electric pulp testing evaluates:',
            options: ['Neural response of the pulp', 'Blood supply directly', 'Bone density', 'Occlusal contacts'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'root-canal-instrumentation',
        title: 'Root Canal Cleaning and Shaping',
        duration: '22:40',
        description: 'Instrumentation techniques and working length determination.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: 'Working length is best defined as the distance from a coronal reference point to:',
            options: ['The apical constriction', 'The anatomical apex only', 'The gingival margin', 'The cementoenamel junction'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'An apex locator is used to:',
            options: ['Electronically determine working length', 'Measure crown height', 'Whiten the tooth', 'Test pulp vitality'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Which irrigant is most commonly used for its antibacterial and tissue-dissolving properties?',
            options: ['Sodium hypochlorite', 'Normal saline only', 'Hydrogen peroxide only', 'Distilled water'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'obturation-techniques',
        title: 'Obturation Techniques',
        duration: '15:30',
        description: 'Methods for sealing the cleaned and shaped root canal system.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'Gutta-percha is popular as a root filling material because it is:',
            options: ['Biocompatible and easy to manipulate', 'Highly toxic but cheap', 'Only used in temporary fillings', 'A metal alloy'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Lateral condensation technique involves:',
            options: [
              'Compacting multiple gutta-percha cones with a spreader',
              'Injecting only sealer with no gutta-percha',
              'Using a single cold cone with no sealer',
              'Heating the entire canal with a laser',
            ],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'The main purpose of a root canal sealer is to:',
            options: ['Fill voids and irregularities for a fluid-tight seal', 'Replace gutta-percha entirely', 'Whiten the root canal', 'Anesthetize the tooth'],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics',
    shortName: 'Prostho',
    description: 'Design, fabrication, and fitting of artificial replacements for teeth and oral structures.',
    color: '#0066f0',
    icon: 'Layers',
    chapters: [
      {
        id: 'intro-prosthodontics',
        title: 'Introduction to Prosthodontics',
        duration: '13:15',
        description: 'Scope and classification of prosthodontic treatment.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: 'Prosthodontics is broadly divided into which two categories?',
            options: ['Fixed and removable prosthodontics', 'Surgical and non-surgical only', 'Pediatric and adult only', 'Preventive and curative only'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'A complete denture is indicated for patients who are:',
            options: ['Completely edentulous', 'Missing a single tooth', 'Undergoing orthodontic treatment', 'Have healthy full dentition'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Which of these is a fixed prosthodontic option?',
            options: ['Dental bridge', 'Complete denture', 'Removable partial denture', 'Orthodontic retainer'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'complete-denture-basics',
        title: 'Complete Denture Fundamentals',
        duration: '21:00',
        description: 'Impression techniques and principles of complete denture construction.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'Retention of a complete denture depends largely on:',
            options: ['Border seal and adhesion/cohesion forces', 'Metal clasps', 'Dental implants only', 'Wire frameworks'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Vertical dimension of occlusion refers to:',
            options: [
              'The distance between two points when jaws are in occlusion',
              'The width of the dental arch',
              'The angle of the mandible',
              'The thickness of the denture base',
            ],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Which impression material is commonly used for final denture impressions?',
            options: ['Zinc oxide eugenol or polyvinyl siloxane', 'Plaster of Paris only', 'Wax only', 'Composite resin'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'fixed-partial-dentures',
        title: 'Fixed Partial Dentures (Bridges)',
        duration: '17:50',
        description: 'Design principles and components of fixed bridges.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: 'The tooth that supports a fixed bridge is called the:',
            options: ['Abutment', 'Pontic', 'Retainer wire', 'Connector only'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'The artificial tooth replacing the missing tooth in a bridge is called the:',
            options: ['Pontic', 'Abutment', 'Coping', 'Framework'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'A cantilever bridge is supported by:',
            options: ['An abutment tooth on only one side', 'Abutment teeth on both sides', 'Implants only', 'No abutment teeth'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'dental-implants-intro',
        title: 'Introduction to Dental Implants',
        duration: '19:35',
        description: 'Basic biology and clinical considerations of implant-supported prosthodontics.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'Osseointegration refers to:',
            options: [
              'Direct structural connection between living bone and implant surface',
              'Formation of a fibrous capsule around the implant',
              'Rejection of the implant by the immune system',
              'Cementation of a crown',
            ],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Which material is most commonly used for dental implant fixtures?',
            options: ['Titanium', 'Stainless steel', 'Gold alloy', 'Acrylic resin'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Primary stability of an implant is achieved through:',
            options: ['Mechanical engagement with bone at placement', 'Soft tissue healing alone', 'Antibiotic therapy', 'Occlusal loading immediately'],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    shortName: 'Ortho',
    description: 'Diagnosis, prevention, and correction of malpositioned teeth and jaws.',
    color: '#1fcaff',
    icon: 'Move',
    chapters: [
      {
        id: 'intro-orthodontics',
        title: 'Introduction to Orthodontics',
        duration: '12:00',
        description: 'Overview of orthodontic goals and treatment scope.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: 'Orthodontics primarily deals with the correction of:',
            options: ['Malocclusion and dentofacial irregularities', 'Dental caries', 'Periodontal infections', 'Root canal disease'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'The ideal time for interceptive orthodontics is generally during:',
            options: ['Mixed dentition stage', 'Adulthood only', 'Infancy before teeth erupt', 'After all growth has stopped'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: "Angle's classification of malocclusion is based on the relationship of the:",
            options: ['First permanent molars', 'Central incisors only', 'Canines only', 'Wisdom teeth'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'angles-classification',
        title: "Angle's Classification of Malocclusion",
        duration: '16:20',
        description: 'Understanding Class I, II, and III malocclusion.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'In Class I malocclusion, the mesiobuccal cusp of the upper first molar occludes with:',
            options: [
              'The buccal groove of the lower first molar',
              'The distal cusp of the lower second molar',
              'The mesial edge of the lower canine',
              'It does not occlude at all',
            ],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Class II malocclusion is characterized by:',
            options: [
              'The lower first molar positioned distal to normal relation',
              'The lower first molar positioned mesial to normal relation',
              'Perfectly aligned molars',
              'Absence of first molars',
            ],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Class III malocclusion is often associated with:',
            options: ['A prognathic mandible', 'A retrognathic mandible', 'Normal jaw relationships', 'Missing incisors only'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'fixed-appliances',
        title: 'Fixed Orthodontic Appliances',
        duration: '18:10',
        description: 'Components and biomechanics of fixed brace systems.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: 'Which component of a fixed appliance is bonded directly to the tooth surface?',
            options: ['Bracket', 'Archwire', 'Elastic band', 'Headgear'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'The archwire in fixed appliances primarily functions to:',
            options: ['Deliver forces to move teeth', 'Whiten the enamel', 'Anchor implants', 'Replace missing teeth'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Elastic ligatures are used to:',
            options: ['Secure the archwire into the bracket slot', 'Extract teeth', 'Whiten teeth', 'Replace missing molars'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'retention-relapse',
        title: 'Retention and Relapse',
        duration: '14:45',
        description: 'Post-treatment stabilization and prevention of orthodontic relapse.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'The retention phase of orthodontic treatment is aimed at:',
            options: ['Maintaining teeth in their corrected positions', 'Moving teeth further', 'Extracting additional teeth', 'Starting a new phase of alignment'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'A common type of removable retainer is the:',
            options: ['Hawley retainer', 'Headgear', 'Bracket system', 'Space maintainer band'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Relapse after orthodontic treatment refers to:',
            options: [
              'A tendency of teeth to return toward their original position',
              'Continued improvement without a retainer',
              'Permanent stabilization with no risk',
              'Growth of new teeth',
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery',
    shortName: 'Surgery',
    description: 'Surgical procedures involving the teeth, jaws, and surrounding oral and maxillofacial structures.',
    color: '#0050c2',
    icon: 'Scissors',
    chapters: [
      {
        id: 'principles-exodontia',
        title: 'Principles of Exodontia',
        duration: '15:00',
        description: 'Basic principles and indications for tooth extraction.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: 'Which of the following is a common indication for tooth extraction?',
            options: ['Non-restorable dental caries', 'Mild gingivitis', 'Healthy erupted tooth', 'Mild tooth staining'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Elevators are primarily used during extraction to:',
            options: ['Luxate and loosen the tooth from its socket', 'Polish the tooth surface', 'Whiten adjacent teeth', 'Apply local anesthesia'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Which instrument is used to grasp and remove the tooth after luxation?',
            options: ['Extraction forceps', 'Explorer', 'Mouth mirror', 'Periodontal probe'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'impacted-third-molars',
        title: 'Impacted Third Molars',
        duration: '20:25',
        description: 'Classification and surgical management of impacted wisdom teeth.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'A mesioangular impaction refers to a tooth tilted:',
            options: ['Toward the front of the mouth', 'Toward the back of the mouth', 'Horizontally', 'Fully upright'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Pericoronitis is inflammation of tissue surrounding:',
            options: ['A partially erupted tooth', 'The root apex', 'The maxillary sinus', 'The temporomandibular joint'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Radiographs used to assess third molar position typically include:',
            options: ['Orthopantomogram (OPG)', 'Chest X-ray', 'MRI of the brain', 'Ultrasound'],
            correctIndex: 0,
          },
          {
            id: 'q4',
            question: 'Which classification system evaluates the depth of impaction relative to adjacent tooth?',
            options: ['Pell and Gregory classification', 'Angle classification', 'Black classification', 'Kennedy classification'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'post-extraction-complications',
        title: 'Post-Extraction Complications',
        duration: '17:15',
        description: 'Recognizing and managing common complications after extractions.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: 'Dry socket is clinically known as:',
            options: ['Alveolar osteitis', 'Pericoronitis', 'Osteomyelitis', 'Cellulitis'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Dry socket typically presents with:',
            options: ['Severe pain due to loss of the blood clot', 'No pain at all', 'Excessive bleeding only', 'Swelling of the tongue'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Prolonged bleeding after extraction may be managed initially with:',
            options: ['Pressure with a gauze pack', 'Immediate antibiotics only', 'A new extraction', 'Ignoring it'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'maxillofacial-trauma-basics',
        title: 'Basics of Maxillofacial Trauma',
        duration: '19:50',
        description: 'Introductory concepts in the assessment of facial injuries.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'The first priority in managing any trauma patient is:',
            options: ['Airway, breathing, circulation (ABC)', 'Cosmetic repair', 'Suturing lacerations', 'X-rays before anything else'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'A common sign of a mandibular fracture is:',
            options: ['Malocclusion and pain on movement', 'Improved bite alignment', 'No change in occlusion', 'Loss of taste sensation'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Panfacial fractures often require which imaging modality for full assessment?',
            options: ['CT scan', 'Bitewing radiograph only', 'Periapical radiograph only', 'No imaging needed'],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    shortName: 'Pedo',
    description: 'Comprehensive oral healthcare for infants, children, and adolescents.',
    color: '#63dfff',
    icon: 'Baby',
    chapters: [
      {
        id: 'child-behavior-management',
        title: 'Child Behavior Management',
        duration: '13:40',
        description: 'Non-pharmacological techniques to manage pediatric dental patients.',
        videoUrl: SAMPLE_VIDEOS[0],
        quiz: [
          {
            id: 'q1',
            question: '"Tell-Show-Do" is a behavior management technique that involves:',
            options: [
              'Explaining, demonstrating, then performing the procedure',
              'Sedating the child first',
              'Restraining the child physically',
              'Skipping explanation entirely',
            ],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'Positive reinforcement in pediatric dentistry is used to:',
            options: ['Encourage desirable behavior', 'Punish undesirable behavior', 'Sedate the patient', 'Replace local anesthesia'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Frankl behavior rating scale classifies child behavior into how many categories?',
            options: ['Four', 'Two', 'Six', 'Ten'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'pulp-therapy-primary-teeth',
        title: 'Pulp Therapy in Primary Teeth',
        duration: '18:30',
        description: 'Pulpotomy and pulpectomy procedures for primary dentition.',
        videoUrl: SAMPLE_VIDEOS[1],
        quiz: [
          {
            id: 'q1',
            question: 'Pulpotomy involves removal of:',
            options: ['Only the coronal pulp tissue', 'The entire pulp including roots', 'The entire tooth', 'Only the enamel'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'A common medicament historically used in primary tooth pulpotomies is:',
            options: ['Formocresol', 'Fluoride varnish', 'Chlorhexidine mouthwash', 'Composite resin'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Pulpectomy is indicated when:',
            options: ['The radicular pulp is also involved/necrotic', 'Only enamel is affected', 'The tooth is completely healthy', 'Only whitening is needed'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'space-maintainers',
        title: 'Space Maintainers',
        duration: '15:55',
        description: 'Indications and types of space maintainers following early tooth loss.',
        videoUrl: SAMPLE_VIDEOS[2],
        quiz: [
          {
            id: 'q1',
            question: 'The main purpose of a space maintainer is to:',
            options: [
              'Preserve arch space after premature loss of a primary tooth',
              'Straighten permanent teeth',
              'Whiten primary teeth',
              'Replace all primary teeth',
            ],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'A band and loop space maintainer is an example of a:',
            options: ['Fixed unilateral space maintainer', 'Removable bilateral appliance', 'Functional orthodontic appliance', 'Surgical implant'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'Premature loss of a primary molar can lead to:',
            options: ['Drifting of adjacent teeth and space loss', 'No effect on the arch', 'Automatic space maintenance', 'Immediate eruption of permanent tooth'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 'dental-trauma-children',
        title: 'Dental Trauma in Children',
        duration: '17:05',
        description: 'Management of traumatic injuries to primary and young permanent teeth.',
        videoUrl: SAMPLE_VIDEOS[3],
        quiz: [
          {
            id: 'q1',
            question: 'An avulsed primary tooth is generally managed by:',
            options: ['Not reimplanting it', 'Immediate reimplantation', 'Root canal treatment first', 'Extracting adjacent teeth'],
            correctIndex: 0,
          },
          {
            id: 'q2',
            question: 'For an avulsed permanent tooth, the best storage medium before reaching the dentist is:',
            options: ['Milk or saline', 'Dry tissue paper', 'Hot water', 'Alcohol'],
            correctIndex: 0,
          },
          {
            id: 'q3',
            question: 'A tooth that is displaced but not avulsed, with the socket wall intact, is described as:',
            options: ['Luxated', 'Fully avulsed', 'Erupted normally', 'Congenitally missing'],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
];

export function getSubject(subjectId: string): Subject | undefined {
  return subjects.find((s) => s.id === subjectId);
}

export function getChapter(subjectId: string, chapterId: string) {
  const subject = getSubject(subjectId);
  if (!subject) return undefined;
  const index = subject.chapters.findIndex((c) => c.id === chapterId);
  if (index === -1) return undefined;
  return {
    subject,
    chapter: subject.chapters[index],
    prevChapter: index > 0 ? subject.chapters[index - 1] : undefined,
    nextChapter: index < subject.chapters.length - 1 ? subject.chapters[index + 1] : undefined,
    index,
  };
}
