### Example of recognition of handwritten characters

In an apparently simple task of recognition of handwritten characters, it is difficult to articulate precisely what we capture as features in the patterns of several samples of each character. But when we are presented with a new sample of a handwritten character, most of the time we have no difficulty in recognizing it correctly. It is likely that from the samples of a handwritten character we may have captured a large number of weak evidence of features in our memory, so that with a new sample as input, the memory relaxes to a state that satisfies as many constraints as possible to the maximum extent.

### Constraint satisfaction model

The above idea of constraint satisfaction can be captured in a PDP model consisting of several units and connections among the units. In this model the units represent hypotheses and the connections represent the knowledge in the form of constraints between any two hypotheses. It is obvious that the knowledge cannot be precise and hence the representation of the knowledge in the form of constraints may not also be precise. So the solution being sought is to satisfy simultaneously as many constraints as possible. Note that the constraints usually are weak constraints, and hence all of them need not be satisfied fully as in the normal constrained optimization problems. The degree of satisfaction is evaluated using a goodness-of-fit function, defined in terms of the output values of the units as well as the weights on the connections between units.
The model we have is already trained and has weights assigned to it. It is these weights that aid in making the original hinton diagram. We can further train the network by providing our input on which descriptor best fits whch room and update the weights accordingly. These new weights are what aid in the making of the new Hinton Diagram.

The clamping of descriptors is like an external input given to the netowrk. When we do so and test the network, after a few cycles, we see the descriptors belonging to the room type of the descriptor that was clamped to be lit up whereas others are not.
Example of capturing the concept of the type of room from descriptors

The constraint satisfaction PDP model is illustrated here with an example of how our concepts of various types of rooms can be captured by the model from samples of description of these rooms. Let us assume that we collect data from subjects about their understanding of the following five types of rooms: Living room, kitchen, bedroom, office and bathroom. In order to elicit information from the subjects, 40 descriptors are provided to them, in terms of which each subject can be asked to give his/her view of the above room types. The descriptors are shown in the following figure.

|Ceiling|Walls|Doors|Windows|Very-large|
|Large|Medium|Small|Very-small|Desk|
|Telephone|bed|Typewriter|Book shelf|Carpet|
|Books|Desk-chair|Clock|Picture|Floor-lamp|
|Sofa|Easy-chair|Coffee-cup|Ashtray|Fireplace|
|Drapes|Stove|Coffeepot|Refrigerator|Toaster|
|Cup board|Sink|Dresser|Television|Bathtub|
|Toilet|Scale|Wen|Computer|Clothes-hanger|
