---
draft: true
order: 3
title: IoT meeting room sensor
client: Webcredible
tags:
  - Product Design
  - IoT
---

A few of us at [Webcredible][webcredible] wanted to learn more about electronics and the [Internet of Things][iot-wikipedia] (IoT) by building something of use around the studio. We set ourselves a simple brief: how can we quickly and easily see if our smallest meeting room, which is mostly used for short calls and informal meetings, is vacant or occupied? We wanted a solution that avoided using a computer altogether.

Our solution was to build two very simple devices, a sensor to detect movement in the room, and a display to indicate the status of the room. Both can communicate with each other over the wireless network, via the cloud. So what did we learn along the way?

## How is designing & building a physical product different from digital products?

At Webcredible we're well versed in designing digital products. We've developed a rock solid process and are adept at using the latest software tools. One of the key strengths of digital is how malleable it is - it's so easy to try out something new.  Or, if your product or service is not working well, adapt and change it.
In many ways, designing a physical product was a surprisingly similar experience. We generated ideas, identified a manageable brief, did exploratory materials research and built prototypes to learn.

In other ways, it was very different. The tooling is very different. To create the wooden enclosures we visited the London Hackspace. Hacker-spaces are a fantastic way to rent time with the sort of equipment that it's simply uneconomic to privately own, allowing access to tools such as 3D printers, woodshops and laser cutters. We used Sketch to create simple 2d blueprints for our enclosures, which the laser cutter used to cut them out.

{% include figure.html image="iot-sensor/soldering.jpg" alt="" %}

Aside from different tools, you have very different materials. Physical materials are less malleable and mistakes are harder to correct. When we were creating the wooden enclosure, we made a few errors in our sums and cut pieces to the wrong dimensions. This cost us not just only time, but wasted wood. The old adage of 'measure twice cut once' applies.

## What was easy or difficult about designing & prototyping in 3D?

When designing for screens you are mostly designing in two dimensions. Designing in three is much more tangible. Colleagues quickly noticed the introduction of a new element to their environment and we got instant feedback without needing to bring people to the product. If you leave a box that turns green or red in a prominent position in your office, people notice!

We had to use different software tools to design for three dimensions. We mostly sketched and mocked up our designs in cardboard, but to get the tricky pyramid shape for the sensor we turned to Sketchup. This was pretty easy to jump into, and as with most new tools, we were able to get 90% of what we were after quite quickly. The other 10% (a simple rotation of an object) kept a consultant frustrated for several hours.

## How did we consider how the product will fit into the office space?

The sensor we used is a little eye that detects movement in the room, and if it detects movement, updates the display to mark the room as occupied. There's no recording involved, and the sensor only detects movement.

Nevertheless, the idea of a sensor in the room had to be handled sensitively so that employees did not feel like they were being watched. We definitely did not want something that looks like a camera, or stood out too much. Conversely, we didn't want anything that was too hidden, as we wanted the sensor to be a talking point.

Triangular shapes such as trapezoids and pyramids really captured our imagination - they didn't look like anything else you might see in a meeting room or an electronic device.

[webcredible]: http://webcredible.com/
[iot-wikipedia]: https://en.wikipedia.org/wiki/Internet_of_things
